import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  console.log(req);
  res.send("Get Request Created");
});

app.post("/", (req, res) => {
  console.log(req);
  res.send("Post Request is Called");
});

app.put("/", (req, res) => {
  console.log(req);
  res.send("put Request is Called");
});

app.delete("/", (req, res) => {
  console.log(req);
  res.send("delete Request is Called");
});

app.listen(PORT, () => console.log("Server is Running on Port " + PORT));
