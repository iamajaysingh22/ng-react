const mongoose = require("mongoose");

const commentSchema = mongoose.model(
  "comments",
  new mongoose.Schema({
    comment: [
      new mongoose.Schema({
        postId: { type: Number, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        body: { type: String, required: true },
      }),
    ],
  })
);

module.exports = commentSchema;
