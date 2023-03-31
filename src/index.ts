import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("JAI SHREE RAM");
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@airbnb-clone.ykwzy1x.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(9999);
    console.log(`Listening on 9999`);
    console.log(`Listening on ${process.env.PORT}`);
  });
