import { model, Schema, Types } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    emailVerified: {
      type: Date,
    },
    hashedPassword: {
      type: String,
    },
    favoriteIds: {
      type: [Types.ObjectId],
    },
    sessions: {
      type: Types.ObjectId,
      ref: "Session",
    },
    accounts: {
      type: Types.ObjectId,
      ref: "Account",
    },
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
