import mongoose from "mongoose";
import crypto from "crypto";

const gridSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex"),
  },
  imgList: [{}],
});

module.exports = mongoose.model("Grid", gridSchema);
