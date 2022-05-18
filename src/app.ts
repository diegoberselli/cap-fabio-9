import "express-async-errors"
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World")
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server Started");
  });
  
  export default app;