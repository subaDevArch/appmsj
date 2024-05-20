import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import { Link } from "react-router-dom";

function ProfesoresAusentes() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  const sortedTasks = tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (tasks.length === 0) return <h1>No Tasks</h1>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Noticias Preceptoria</h1>
      <Link
        to="/add-task"
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 inline-block"
      >
        Agregar Aviso
      </Link>
      <div>
        {sortedTasks.map((task) => (
          <div key={task._id} className="mb-4">
            <TaskCard task={task} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfesoresAusentes;
