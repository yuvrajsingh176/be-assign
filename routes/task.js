import { Router } from "express";
import { createTask, deleteTask, getsingleTask, getTask, updateTask } from "../controllers/taskcontroller.js";
const router = Router();

router.get("/get-task", getTask);
router.get("/get-single-task/:id", getsingleTask);

router.post("/add-task", createTask);
router.patch("/update-task/:id", updateTask);
router.delete("/delete-task/:id", deleteTask);
export default router;
