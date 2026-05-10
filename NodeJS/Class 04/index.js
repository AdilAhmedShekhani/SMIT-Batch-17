import express from "express";
import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json());

// Routes
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});