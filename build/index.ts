import express from "express";

const app = express();

const PORT = 5000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send(`
    <div>
        <h1>Hi there!</h1>
        </div>`);
});

app.listen(PORT, () => {
  console.log("server running on 5000");
});
