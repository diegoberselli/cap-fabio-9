import "express-async-errors";
import express from "express";
import { handleError } from "./middlewares/handleError";

const app = express();

app.use(express.json());
app.use(handleError);

app.get("/", (request, response) => {
  response.send("Hello World")
})

export default app;
