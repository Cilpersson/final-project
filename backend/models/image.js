import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("Image", imageSchema);
