import { useState } from "react";

const TaskItem = ({ storedName, storedStatus, deleteTask }) => {
  const [status, setStatus] = useState(storedStatus);

  const switchStatusHandler = () => {
    setStatus((prev) => !prev);
  };

  const deleteTaskHandler = () => {
    deleteTask(storedName);
  };

  return (
    <div>
      <h3 style={{ textDecoration: status ? "line-through" : "none" }}>
        {storedName}
      </h3>
      <button onClick={switchStatusHandler}>
        {status ? "Marcar como incompleta" : "Marcar como completa"}
      </button>
      <button onClick={deleteTaskHandler}>Borrar tarea</button>
    </div>
  );
};

export default TaskItem;
