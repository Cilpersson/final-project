import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  src: {
    type: String,
    required: true,
  },
  imageId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
});

module.exports = mongoose.model("Image", imageSchema);
