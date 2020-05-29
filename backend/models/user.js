import mongoose from "mongoose";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  email: {
    type: String,
    unique: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  createdGridsCount: {
    type: Number,
    default: 0,
  },
  createdGrids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Grid",
    },
  ],
  connectedGridsCount: {
    type: Number,
    default: 0,
  },
  connectedGrids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Grid",
    },
  ],
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex"),
  },
});

module.exports = mongoose.model("User", userSchema);
