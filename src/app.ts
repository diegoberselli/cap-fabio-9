import "express-async-errors"
import express from "express";

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server Started");
  });
  
  export default app;