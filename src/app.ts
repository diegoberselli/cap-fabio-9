import "express-async-errors";
import express from "express";
import { handleError } from "./middlewares/handleError";
import { appRoutes } from "./routes";

const app = express();

app.use(express.json());
appRoutes(app);
app.use(handleError);

// app.get("/", (request, response) => {
//   response.send("Hello World");
// });

export default app;
