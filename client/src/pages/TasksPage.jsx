import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>No Tasks</h1>;

  return (
    
    <div>
      {tasks.map((task) => (
        <div key={task._id} className="mb-4">
          <TaskCard task={task} />
        </div>
      ))}
    </div>
  );
}

export default TasksPage;
