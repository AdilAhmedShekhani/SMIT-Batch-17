/** @format */

import express from "express";
const router = express.Router();
const users = [
  {
    id: 1,
    name: "Adil Ahmed",
    email: "adil@example.com",
  },
];

// Get all users
router.get("/", (req, res) => {
  res.status(200).json({
    error: false,
    message: "Users fetched successfully",
    data: users,
  });
});

//post user
router.post("/", (req, res) => {
  const { name, email } = req.body;
  console.log("name", name);
  console.log("email", email);
  users.push({
    id: users.length + 1,
    name,
    email,
  });
  res.status(201).json({
    error: false,
    message: "User added successfully",
    data: users,
  });
});

//get user by id
router.get("/:id", (req, res) => {
  const user = users.find((data) => data.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({
      error: true,
      message: "User not found",
    });
  }
  res.status(200).json({
    error: false,
    message: "User fetched successfully",
    data: user,
  });
});

export default router;
