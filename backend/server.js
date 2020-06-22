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
import Comment from "./models/comment";

var probe = require("probe-image-size");

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
    transformation: [{ width: 1000, height: 1000, crop: "limit" }],
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
app.use(bodyParser.json({ limit: "3mb", extended: true }));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// ERROR HANDLING MESSAGES
const ERR_CREATE_USER = "Could not create user";
const ERR_LOGIN_USER = "Could not log in user";

// AUTHENTICATION FUNCTION
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

// SHOWS ALL USERS
app.get("/users", authenticateUser);
app.get("/users", async (req, res) => {
  const users = await User.find()
    .populate("commentList")
    .populate("createdGrids")
    .populate("connectedGrids");
  res.json(users);
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
    res.status(400).json({ message: ERR_LOGIN_USER, signInSuccessful: false });
  }
});

// SIGN-UP FOR NEW USER
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password: bcrypt.hashSync(password) });
    const saved = await user.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: ERR_CREATE_USER, signUpSuccessful: false });
  }
});

// AUTHORIZATION WHEN SIGNING IN
app.get("/users/:id/secure", authenticateUser);
app.get("/users/:id/secure", (req, res) => {
  res.json({ message: `This is a top secret message for ${req.user.name}` });
});

// RETURNS INFO ON ONE USER AND POPULATES IT WITH CREATED-  AND CONNECTED GRIDS
app.get("/users/:id", authenticateUser);
app.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ _id: id })
    .sort({ "createdGrids.createdAt": -1 })
    .sort({ "connectedGrids.createdAt": -1 })
    .populate("createdGrids")
    .populate("connectedGrids")
    .exec();
  res.json(user);
});

// CREATES A NEW GRID FOR A USER
app.post("/users/:id/grid", authenticateUser);
app.post("/users/:id/grid", async (req, res) => {
  const { id } = req.params;
  const { name, gridOwner } = req.body;

  try {
    const createdGrid = await new Grid({
      name,
      createdBy: id,
      gridOwner,
    })
      .populate("imgList")
      .save();

    await User.findOneAndUpdate(
      { _id: id },
      {
        //$push: { createdGrids: createdGrid._id },
        $push: { createdGrids: createdGrid },
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
  parser.array("images"),
  async (req, res) => {
    const { accessTokenGrid } = req.params;
    try {
      const images = [];
      for (const file of req.files) {
        const { width, height } = await probe(file.path);

        const image = await new Image({
          src: file.path,
          imageId: file.filename,
          width: width,
          height: height,
        }).save();

        images.push(image);
      }

      const populatedGrid = await Grid.findOneAndUpdate(
        { accessToken: accessTokenGrid },
        {
          $push: {
            imgList: {
              // Pushes images to first place in imgList array
              $each: images,
              $position: 0,
            },
          },
        },
        { new: true }
      ).populate("imgList");
      // If pop null throw exception
      if (populatedGrid === null || populatedGrid === undefined) {
        throw "Could not post image to grid";
      } else {
        res.status(201).json(populatedGrid);
      }
    } catch (err) {
      res.status(400).json({ message: "Could not post image to grid" });
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
    if (gridToConnect.createdBy !== id) {
      if (gridToConnect) {
        await gridToConnect.save();

        await User.findOneAndUpdate(
          { _id: id },
          {
            $addToSet: { connectedGrids: gridToConnect },
          }
        ).populate("connectedGrids");

        res.status(201).json(gridToConnect);
      }
    } else {
      res.status(400).json({ message: "Could not connect grid to user" });
    }
  } catch (err) {
    res.status(400).json({ message: "Could not connect grid to user" });
  }
});

// RETURNS INFO ON ONE GRID AND POPULATES IT
// Had to add the accesstoken for the grid as a param.
// Couldn't have it in the body because endpoint is GET.
app.get("/grids/grid/:accessTokenGrid", authenticateUser);
app.get("/grids/grid/:accessTokenGrid", async (req, res) => {
  const { accessTokenGrid } = req.params;

  try {
    const grid = await Grid.findOne({ accessToken: accessTokenGrid })
      .populate("imgList")
      .populate("commentList")
      .exec();
    res.status(201).json({ grid: grid, commentList: grid.commentList });
  } catch (error) {
    res.status(400).json({ message: "Could not display grid" });
  }
});

// POST COMMENT TO GRID
app.post("/grids/grid/:accessTokenGrid", authenticateUser);
app.post("/grids/grid/:accessTokenGrid", async (req, res) => {
  const { accessTokenGrid } = req.params;
  const { name, message } = req.body;

  try {
    const comment = await new Comment({
      message: message,
      name: name,
    }).save();

    const grid = await Grid.findOneAndUpdate(
      { accessToken: accessTokenGrid },
      {
        $push: { commentList: comment },
      },
      { new: true }
    )
      .populate("commentList")
      .exec();
    res.status(201).json({ commentList: grid.commentList });
  } catch (error) {
    res.status(400).json({ message: "Could not post comment" });
  }
});

//DELETE GRID THAT USER HAS CREATED
app.delete("/users/grid/delete/:accessTokenGrid", authenticateUser);
app.delete("/users/grid/delete/:accessTokenGrid", async (req, res) => {
  const { accessTokenGrid } = req.params;
  const { id } = req.body;

  const gridToDelete = await Grid.findOne({
    accessToken: accessTokenGrid,
  });

  try {
    if (gridToDelete.createdBy === id) {
      await gridToDelete.deleteOne();
    }
    res.status(201).json("Grid deleted");
  } catch (error) {
    res.status(400).json({ message: "Could not delete  grid: ", error: error });
  }
});

//LEAVE GRID USER IS CONNECTED TO
app.put("/users/grid/leave/:accessTokenGrid", authenticateUser);
app.put("/users/grid/leave/:accessTokenGrid", async (req, res) => {
  const { accessTokenGrid } = req.params;
  const { id } = req.body;

  try {
    const grid = await Grid.findOne({ accessToken: accessTokenGrid });

    if (grid) {
      await User.findOneAndUpdate(
        { _id: id },
        { $pull: { connectedGrids: grid._id } }
      );
    }
    res.status(201).json("Disconnect from grid successful");
  } catch (error) {
    res
      .status(400)
      .json({ message: "Could not disconnect from grid: ", error: error });
  }
});

// ATTEMPT TO PAGINATE IMAGELIST WITH AGGREGATE
app.get("/grids/grid/:accessTokenGrid/images", authenticateUser);
app.get("/grids/grid/:accessTokenGrid/images", async (req, res) => {
  const { accessTokenGrid } = req.params;
  const { page, sort } = req.query;

  const pageNbr = +page || 1;
  const perPage = 10;
  const skip = perPage * (pageNbr - 1);
  const sorting = +sort || -1;

  const totalImages = await Grid.findOne({ accessToken: accessTokenGrid });
  const pages = Math.ceil(totalImages.imgList.length / perPage);

  try {
    const grid = await Grid.aggregate([
      { $match: { accessToken: accessTokenGrid } },
      {
        $unwind: {
          path: "$imgList",
        },
      },
      {
        $lookup: {
          from: "images",
          localField: "imgList",
          foreignField: "_id",
          as: "imgList",
        },
      },
      {
        $project: {
          imgList: 1,
        },
      },
      {
        $unwind: {
          path: "$imgList",
        },
      },
      {
        $sort: {
          "imgList.createdAt": sorting,
        },
      },
      {
        $skip: skip,
      },
      {
        $limit: perPage,
      },

      {
        $group: {
          _id: "$_id",
          imgList: { $push: "$imgList" },
        },
      },
    ]);
    res.status(201).json({ pages: pages, grid: grid });
  } catch (error) {
    console.log(error);
  }
});

// ATTEMPT TO PAGINATE COMMENTLIST WITH AGGREGATE
app.get("/grids/grid/:accessTokenGrid/comments", authenticateUser);
app.get("/grids/grid/:accessTokenGrid/comments", async (req, res) => {
  const { accessTokenGrid } = req.params;
  const { page, sort } = req.query;

  const pageNbr = +page || 1;
  const perPage = 5;
  const skip = perPage * (pageNbr - 1);
  const sorting = +sort || -1;

  const totalImages = await Grid.findOne({ accessToken: accessTokenGrid });
  const pages = Math.ceil(totalImages.imgList.length / perPage);

  try {
    const grid = await Grid.aggregate([
      {
        $match: {
          accessToken: "6f1bde33c03d6ea061a7d9ea07987a1c",
        },
      },
      {
        $unwind: {
          path: "$commentList",
        },
      },
      {
        $lookup: {
          from: "comments",
          localField: "commentList",
          foreignField: "_id",
          as: "commentList",
        },
      },
      {
        $project: {
          commentList: 1,
        },
      },
      {
        $unwind: {
          path: "$commentList",
        },
      },
      {
        $sort: {
          "imgList.createdAt": sorting,
        },
      },
      {
        $skip: skip,
      },
      {
        $limit: perPage,
      },
      {
        $sort: {
          "commentList.createdAt": -1,
        },
      },
      {
        $group: {
          _id: "$_id",
          commentList: { $push: "$commentList" },
        },
      },
    ]);
    res.status(201).json({ pages: pages, grid: grid });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// FOR DELETING IMAGES ON CLOUDINARY, WIL DO THIS AFTER PRESENTATION
/*
cloudinary.v2.api.delete_resources(['image1', 'image2'],
  function(error, result){console.log(result);});
*/
