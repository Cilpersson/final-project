import express, { json } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";
import cloudinaryframework from "cloudinary";
import multer from "multer";
import cloudinaryStorage from "multer-storage-cloudinary";
import dotenv from "dotenv";

import User from "./models/user";
import Grid from "./models/grid";
import Image from "./models/image";

dotenv.config();
const cloudinary = cloudinaryframework.v2;

cloudinary.config({
  cloud_name: "dfgtk87hp", // Cloud name genereated by Cloudinary
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = cloudinaryStorage({
  cloudinary,
  params: {
    folder: "photo_grid",
    allowedFormats: ["jpg", "png", "jpeg"],
    transformation: [{ width: 700, height: 700, crop: "limit" }],
  },
});

const parser = multer({ storage });

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/finalProject";
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.Promise = Promise;

const port = process.env.PORT || 8080;
const app = express();
const listEndpoints = require("express-list-endpoints");

app.use(cors());
app.use(bodyParser.json({ limit: "10mb", extended: true }));

const authenticateUser = async (req, res, next) => {
  try {
    const user = await User.findOne({
      accessToken: req.header("Authorization"),
    });

    if (user) {
      req.user = user;
      next();
    } else {
      res
        .status(401)
        .json({ loggedOut: true, message: "Please try logging in again" });
    }
  } catch (err) {
    res
      .status(403)
      .json({ message: "Access token is missing or wrong", errors: err });
  }
};

// SHOWS ALL ENDPOINTS AVILABLE
app.get("/", (req, res) => {
  res.send(listEndpoints(app));
});

// LOG-IN FOR EXISTING USER
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(201).json({
        id: user._id,
        accessToken: user.accessToken,
        signInSuccessful: true,
        name: user.name,
      });
    } else {
      res.status(404).json({ signInSuccessful: false });
    }
  } catch (err) {
    res.status(400).json({ signInSuccessful: false });
  }
});

// JUST FOR DEVELOPMENT PURPOSE
app.get("/users", async (req, res) => {
  const user = await User.find()
    .populate("createdGrids")
    .populate("connectedGrids")
    .exec();
  res.json({ user: user });
});

// SIGN-UP FOR NEW USER
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password: bcrypt.hashSync(password) });
    const saved = await user.save();
    res.status(201).json({
      id: saved._id,
      accessToken: saved.accessToken,
      signUpSuccessful: true,
      name: user.name,
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Could not create user", signUpSuccessful: false });
  }
});

// RETURNS INFO ON ONE USER AND POPULATES IT WITH CREATED-  AND CONNECTED GRIDS
app.get("/users/:id", authenticateUser);
app.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ _id: id })
    .populate("createdGrids")
    .populate("connectedGrids")
    .exec();
  res.json(user);
});

// AUTHORIZATION WHEN SIGNING IN
app.get("/users/:id/secure", authenticateUser);
app.get("/users/:id/secure", (req, res) => {
  res.json({ message: `This is a top secret message for ${req.user.name}` });
});

// CREATES A NEW GRID FOR A USER
app.post("/users/:id/grid", authenticateUser);
app.post("/users/:id/grid", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const createdGrid = await new Grid({ name }).populate("imgList").save();

    await User.findOneAndUpdate(
      { _id: id },
      {
        $push: { createdGrids: createdGrid._id },
      }
    ).populate("createdGrids");
    res.status(201).json(createdGrid);
  } catch (err) {
    res.status(400).json({ message: "Could not create grid" });
  }
});

//POST PHOTO TO GRID
// app.post("/users/grid/post/:accessTokenGrid", authenticateUser);
app.post(
  "/users/grid/post/:accessTokenGrid",
  parser.single("image"),
  async (req, res) => {
    const { accessTokenGrid } = req.params;
    // Look into parser.array for several images at once
    try {
      const image = await new Image({
        imageUrl: req.file.path,
        imageId: req.file.filename,
      }).save();

      const populatedGrid = await Grid.findOneAndUpdate(
        { accessToken: accessTokenGrid },
        {
          $push: { imgList: image },
        }
      ).populate("imgList");

      // If pop null throw exception
      if (populatedGrid === null || populatedGrid === undefined) {
        throw "Could not post image to grid";
      } else {
        res.status(201).json(populatedGrid);
      }
    } catch (err) {
      res.status(400).json({ message: "Could not post image to grid catch" });
      console.log(err);
    }
  }
);

// CONNECTS A USER AND A GRID
app.post("/users/:id/connect", authenticateUser);
app.post("/users/:id/connect", async (req, res) => {
  const { id } = req.params;
  const { accessToken } = req.body;

  try {
    const gridToConnect = await Grid.findOne({
      accessToken: accessToken,
    });

    if (gridToConnect) {
      await gridToConnect.save();
      await User.findOneAndUpdate(
        { _id: id },
        {
          $push: { connectedGrids: gridToConnect },
        }
      ).populate("connectedGrids");
      res.status(201).json(gridToConnect);
    } else {
      res.status(400).json({ message: "Could not connect grid to user" });
    }
  } catch (err) {
    res.status(400).json({ message: "Could not connect grid to user" });
  }
});

// RETURNS INFO ON ONE GRID AND POPULATES THE IMGLIST
// Had to add the accesstoken for the grid as an param.
// Couldn't have it in the body because endpoint is GET.
// Is this concidered a secure enough solution, I don't really know?
app.get("/grids/grid:accessTokenGrid", authenticateUser);
app.get("/grids/grid/:accessTokenGrid", async (req, res) => {
  const { accessTokenGrid } = req.params;

  try {
    const grid = await Grid.findOne({ accessToken: accessTokenGrid }).populate(
      "imgList"
    );
    res.status(201).json(grid);
  } catch (error) {
    res.status(400).json({ message: "Could not display grid" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
