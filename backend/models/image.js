import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  // Might add name back again
  // name: {
  //   type: String,
  //   required: true,
  //   minlength: 5,
  // },
  imageUrl: {
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
});

module.exports = mongoose.model("Image", imageSchema);
