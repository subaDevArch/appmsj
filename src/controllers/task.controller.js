import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error("Error al obtener tareas:", error);
    return res.status(500).json({ message: "Algo salió mal" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    // Verifica si req.user está definido y tiene el _id
    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: "Usuario no autenticado" });
    }

    const newTask = new Task({
      title,
      description,
      date,
    });

    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    console.error("Error al crear tarea:", error);
    return res.status(500).json({ message: "Algo salió mal" });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.json(task);
  } catch (error) {
    console.error("Error al obtener tarea por ID:", error);
    return res.status(500).json({ message: "Algo salió mal" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    return res.sendStatus(204);
  } catch (error) {
    console.error("Error al eliminar tarea:", error);
    return res.status(500).json({ message: "Algo salió mal" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.json(task);
  } catch (error) {
    console.error("Error al actualizar tarea:", error);
    return res.status(500).json({ message: "Algo salió mal" });
  }
};
