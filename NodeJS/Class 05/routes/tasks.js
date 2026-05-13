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


export default router;
