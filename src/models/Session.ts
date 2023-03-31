import { model, Schema, Types } from "mongoose";

const sessionSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    required: true,
  },
  sessionToken: {
    type: String,
    required: true,
    unique: true,
  },
  expires: {
    type: Date,
  },
});

export default model("Session", sessionSchema);
