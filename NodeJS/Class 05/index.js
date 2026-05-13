import express from "express";
import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json());

// Routes
app.use("/users", userRoutes);

// MogoDB connection and server start
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});