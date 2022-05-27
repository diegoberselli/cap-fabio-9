import "express-async-errors";
import express from "express";
import { handleError } from "./middlewares/handleError";
import { appRoutes } from "./routes";
import { Request,Response } from "express";


const app = express();

app.use(express.json());
appRoutes(app);
app.use(handleError);

app.get("", (req: Request, res:Response) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "Ok, running",
    timestamp: Date.now(),
  };
  res.send(healthcheck);
});


export default app;
