import expess from "express";
import Task from "../models/Task.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const { task } = req.body;
    let newTask = new Task({ task });
    newTask = await newTask.save();
    res.status(201).json({
        error: false,
        message: "Task created successfully",
        data: newTask   });
    })

export default router;
