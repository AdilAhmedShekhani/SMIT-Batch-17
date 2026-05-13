import expess from "express";
import Task from "../models/Task.js";
import { sendResponse } from "../helpers/sendResponse.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const { task } = req.body;
    let newTask = new Task({ task });
    newTask = await newTask.save();
    sendResponse(res, 201, newTask, false, "Task created successfully");
});

router.get("/", async (req, res) => {
    const tasks = await Task.find();
    sendResponse(res, 200, tasks, false, "Tasks fetched successfully");
});

router.get("/:id", async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        return sendResponse(res, 404, null, true, "Task not found");
    }
    sendResponse(res, 200, task, false, "Task fetched successfully");
});

router.put("/:id", async (req, res) => {
    const { task, completed } = req.body;
    let updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        { task, completed },
        { new: true }
    );
    if (!updatedTask) {
        return sendResponse(res, 404, null, true, "Task not found");
    }
    if (task !== undefined) {
        updatedTask.task = task;
    }
    if (completed !== undefined) {
        updatedTask.completed = completed;

        await updatedTask.save();
    }
    sendResponse(res, 200, updatedTask, false, "Task updated successfully");
});



export default router;
