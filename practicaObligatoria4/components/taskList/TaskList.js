import TaskItem from "../taskItem/TaskItem";

const taskList = ({ tasks, deleteTask }) => {
  const deleteTaskHandler = (name) => deleteTask(name);

  const tasksMapped = tasks.map((task) => (
    <TaskItem
      storedName={task.name}
      storedStatus={task.status}
      deleteTask={deleteTaskHandler}
    />
  ));

  return (
    <div>
      {tasksMapped.length > 0 ? tasksMapped : <h1>No existen tareas</h1>}
    </div>
  );
};

export default taskList;
