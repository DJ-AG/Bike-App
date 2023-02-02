import "express-async-errors";
import express, { Request, Response } from "express";

const app = express();

import dotenv from "dotenv";

dotenv.config();

import morgan from 'morgan'

//db and authenticateUser
import connectDB from "./DB/connect";

// routers
import authRouter from "./routes/authRouter";
import stationRouter from "./routes/stationRouter";

//middleware
import errorHandlerMiddleware from "./middleware/error-handler";
import notFoundMiddleware from "./middleware/not-found";

if(process.env.NODE_ENV !== 'production'){
  app.use(morgan('dev'))
}
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/station", stationRouter);

app.use((req, res, next) => {
  console.log(req.url);
  console.log(req.method);
  next();
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL!);
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
