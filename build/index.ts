import "express-async-errors";
import express from "express";
import mongoose from "mongoose";
import path from "path";
mongoose.set("strictQuery", false);
const app = express();

import dotenv from "dotenv";

dotenv.config();

import morgan from "morgan";

//db and authenticateUser
import connectDB from "./DB/connect";

// routers
import stationRouter from "./routes/stationRouter";
import jorneyRouter from './routes/jorneyRouter'

//middleware
import errorHandlerMiddleware from "./middleware/error-handler";
import notFoundMiddleware from "./middleware/not-found";
if ((process.env.NODE_ENV! || "").trim() !== "production") {
  app.use(morgan("dev"));
}
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(express.json());

app.use("/api/v1/jorney", jorneyRouter);
app.use("/api/v1/station", stationRouter);

app.use((req, res, next) => {
  next();
});
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL!);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
