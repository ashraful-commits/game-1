import mongoose from "mongoose";

const newsFeedSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    photo: {
      type: String,
      default: null,
    },
    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
    },
    comments: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
    },
  },
  { timestamps: true }
);

let NewsFeedModel: any;

try {
  NewsFeedModel = mongoose.model("Smash-News-Feed");
} catch (e) {
  NewsFeedModel = mongoose.model("Smash-News-Feed", newsFeedSchema);
}

export default NewsFeedModel;
