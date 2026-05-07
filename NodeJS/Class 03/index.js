

import express from "express";
import userRouter from "./routers/users.js";

const app = express();
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    error: false,
    message: "Welcome to the API",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
