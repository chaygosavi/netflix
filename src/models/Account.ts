import { model, Schema, Types } from "mongoose";

const accountSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
    unique: true,
  },
  providerAccountId: {
    type: String,
    required: true,
    unique: true,
  },
  refresh_token: {
    type: String,
  },
  access_token: {
    type: String,
  },
  expires_At: {
    type: Number,
  },
  token_type: {
    type: String,
  },
  scope: {
    type: String,
  },
  id_token: {
    type: String,
  },
  session_state: {
    type: String,
  },
});

export default model("Account", accountSchema);
