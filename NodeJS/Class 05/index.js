import express from "express";
import userRoutes from "./routes/users.js";
import taskRoutes from "./routes/tasks.js";

const app = express();
const PORT = 4000;
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

// MogoDB connection and server start
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});