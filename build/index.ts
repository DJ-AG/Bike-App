import express from "express";
import errorHandlerMiddleware from "./middleware/error-handler";
import notFoundMiddleware from "./middleware/not-found";
import dotenv from 'dotenv'
import connectDB from "./DB/connect";

dotenv.config()

const app = express();

app.use(express.json())

//middleware


app.get("/", (req: express.Request, res: express.Response) => {
  res.send(`
    <div>
        <h1>Hi there!</h1>
        </div>`);
});

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


app.listen(5000, () => {
  console.log("server running on 5000");
});
 

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL!)
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}...`)
    })
  } catch (error) {
    console.log(error)
  }
}