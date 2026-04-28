import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Students");
});
app.get("/users", (req, res) => {
  res.send([{ name: "Adil Ahmed Shekhani" }]);
});

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
