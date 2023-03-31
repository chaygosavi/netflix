import { model, Schema, Types } from "mongoose";

const verificationSchema = new Schema({
  identifier: {
    type: String,
    required: true,
    unique: true,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  expires: {
    type: Date,
  },
});

export default model("VerificationToken", verificationSchema);
