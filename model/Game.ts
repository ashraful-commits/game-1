import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    type: {
      type: String,
      default: null,
    },
    desc: {
      type: String,
    },
    photo: {
      type: String,
      default: null,
    },
    prize: {
      type: Number,
      default: 0,
    },
    participant: {
      type: Number,
      default: 0,
    },
    player: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: "User",
    },
    date: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

let GameModel: any;

try {
  GameModel = mongoose.model("Game");
} catch (e) {
  GameModel = mongoose.model("Game", gameSchema);
}

export default GameModel;
