/*import { useTasks } from "../context/TasksContext";
import {Link} from 'react-router-dom'

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            delete
          </button>
          <Link to = {`/tasks/${task._id}`}>edit</Link>
        </div>
      </header>
      <p className="text-slate-300">{task.description}</p>
      <p>{new Date(task.date).toLocaleDateString()}</p>
    </div>
  );
}

export default TaskCard;*/
import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  const { isAuthenticated } = useAuth(); // Obtener el estado de autenticación del contexto

  return (
    <div className="from bg-gray-600 to-gray-300 w-full p-4 rounded-md shadow-md">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold text-white">{task.title}</h1>
        {isAuthenticated && ( // Verificar si el usuario está autenticado antes de mostrar los botones
          <div className="flex gap-x-2">
            <button
              onClick={() => {
                deleteTask(task._id);
              }}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Borrar
            </button>
            <Link
              to={`/tasks/${task._id}`}
              className="text-sm text-blue-500 hover:text-blue-700"
            >
              Editar
            </Link>
          </div>
        )}
      </header>
      <p className="text-sm text-white mb-2">{task.description}</p>
      <p className="text-sm text-white">
        {new Date(task.date).toLocaleDateString()}
      </p>
    </div>
  );
}

export default TaskCard;
