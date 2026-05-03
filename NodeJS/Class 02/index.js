import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello World to first API Created");
});

app.listen(PORT, () => console.log("Server is Running on Port " + PORT));
