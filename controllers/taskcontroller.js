import Task from "../model/task.js";

export const getTask = async (req, res) => {
  try {
    const alltask = await Task.find();
    return res.status(200).json({ alltask });
  } catch (e) {
    console.log(e);
  }
};
export const getsingleTask = async (req, res) => {
  try {
    const id = req.params.id;

    const alltask = await Task.findById(id);
    return res.status(200).json({ alltask });
  } catch (e) {
    console.log(e);
  }
};
export const createTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const task = await Task.create({ title, description, dueDate });
    return res.status(200).json({ task });
  } catch (error) {
    console.error("Error creating :", error);
    res.status(500).json({ msg: "Error creating " });
  }
};

export const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const options = { new: true };

    const task = await Task.findByIdAndUpdate(id, updates.task, options);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error("Error creating :", error);
    res.status(500).json({ msg: "Error creating " });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ msg: "Task not found" });
    }
    return res.status(200).json({ deletedTask });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ msg: "Error deleting task" });
  }
};
