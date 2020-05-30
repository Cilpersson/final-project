import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";
import User from "./models/user";
import Grid from "./models/grid";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/authAPI";
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.Promise = Promise;

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(bodyParser.json());

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

app.get("/", (req, res) => {
  res.send("Hello world");
});

// I ADDED THIS GET TO POPULATE THE USERS WITH THEIR GRIDS
app.get("/users", async (req, res) => {
  const users = await User.find()
    .populate("createdGrids")
    .populate("connectedGrids");
  res.json({ users: users });
});

// LOG-IN FOR EXISTING USER
app.post("/sessions", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(201).json({
        id: user._id,
        accessToken: user.accessToken,
        signInSuccessful: true,
      });
    } else {
      res.status(404).json({ signInSuccessful: false });
    }
  } catch (err) {
    res.status(400).json({ signInSuccessful: false });
  }
});

// SIGN-UP FOR NEW USER
app.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password: bcrypt.hashSync(password) });
    const saved = await user.save();
    res.status(201).json({
      id: saved._id,
      accessToken: saved.accessToken,
      signUpSuccessful: true,
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Could not create user", signUpSuccessful: false });
  }
});

// AUTHORIZATION WHEN SIGNING IN
app.get("/users/:id/secure", authenticateUser);
app.get("/users/:id/secure", (req, res) => {
  res.json({ message: `This is a top secret message for ${req.user.name}` });
});

// CREATES A NEW GRID FOR A USER
app.post("/users/:id/grids", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const createdGrid = await new Grid({ name }).save();

    await User.findOneAndUpdate(
      { _id: id },
      {
        $inc: { createdGridsCounter: 1 },
        $push: { createdGrids: createdGrid._id },
      }
    );
    res.status(201).json(createdGrid);
  } catch (err) {
    res.status(400).json({ message: "Could not create grid" });
  }
});

// CONNECTS A USER AND A GRID
app.post("/users/:id/connect", async (req, res) => {
  const { id } = req.params;
  const { accessToken } = req.body;

  try {
    const gridToConnect = await Grid.findOne({
      accessToken: accessToken,
    });

    await gridToConnect.save();

    await User.findOneAndUpdate(
      { _id: id },
      {
        $inc: { connectedGridsCounter: 1 },
        $push: { connectedGrids: gridToConnect },
      }
    );
    res.status(201).json(createdGrid);
  } catch (err) {
    res.status(400).json({ message: "Could not connect grid" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
