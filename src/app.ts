import "express-async-errors"
import express from "express";

const app = express();

app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
    console.log("Running at 3000");
  });

  export default app;