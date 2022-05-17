import "express-async-errors";
import express from "express";
import { handleError } from "./middlewares/handleError";

const app = express();

app.use(express.json());
app.use(handleError);

app.listen(3000, () => {
  console.log("Server Started");
});

export default app;
