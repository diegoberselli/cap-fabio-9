import "express-async-errors";
import express from "express";
import { handleError } from "./middlewares/handleError";
import { appRoutes } from "./routes";

const app = express();

app.use(express.json());
appRoutes(app);
app.use(handleError);

app.get("/", (request, response) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "Ok, running",
    timestamp: Date.now(),
  };
  response.send(healthcheck);
});


export default app;
