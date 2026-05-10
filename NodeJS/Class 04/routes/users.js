import express from "express";
// import { users } from "../data/users.js";

const router = express.Router();

// CREATE
router.post("/", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.json(newUser);
});

// READ ALL
router.get("/", (req, res) => {
  res.json(users);
});

// READ ONE
router.get("/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  res.json(user || { message: "User not found" });
});

// UPDATE
router.put("/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (user) {
    user.name = req.body.name;
    res.json(user);
  } else {
    res.json({ message: "User not found" });
  }
});

// DELETE
router.delete("/:id", (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: "User deleted" });
  } else {
    res.json({ message: "User not found" });
  }
});

export default router;