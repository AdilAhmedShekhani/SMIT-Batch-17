import mongoose from "mongoose";

const {Schema} = mongoose;

const taskSchema = new Schema({
  task: String,
  completed: { type: Boolean, default: false },
}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema);

export default Task;