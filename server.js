import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import userRouter from "./src/routers/user-router.js";
import fileUpload from 'express-fileupload';

const app = express();
const PORT = process.env.PORT;

app.use(express.static("public"));
app.use(fileUpload({}));
app.use(express.json());
app.use(userRouter);
app.use((req, res) => {
  res.status(404).send({ message: "Page is not found" });
});

const startApp = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_DB_URL);

    app.listen(PORT, () => {
      console.log("Server listening on port " + PORT);
    });
  } catch (error) {
    throw error;
  }
};

startApp();
