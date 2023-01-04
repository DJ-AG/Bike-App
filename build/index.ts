import express from "express";
import errorHandlerMiddleware from "./middleware/error-handler";
import notFoundMiddleware from "./middleware/not-found";

const app = express();


//middleware
notFoundMiddleware
errorHandlerMiddleware

app.get("/", (req: express.Request, res: express.Response) => {
  res.send(`
    <div>
        <h1>Hi there!</h1>
        </div>`);
});

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = 5000;

app.listen(PORT, () => {
  console.log("server running on 5000");
});
 