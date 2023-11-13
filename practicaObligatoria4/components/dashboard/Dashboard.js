import { useState } from "react";

import LogButton from "../logButton/LogButton";
import TaskForm from "../taskForm/TaskForm";
import TaskList from "../taskList/TaskList";

const TASKS = [];

const Dashboard = () => {
  const [tasks, setTasks] = useState(TASKS);

  const addTaskHandler = (name) =>
    setTasks((prevTasks) => [...prevTasks, { name: name, status: false }]);

  const deleteTaskHandler = (name) =>
    setTasks((prevTasks) => prevTasks.filter((task) => task.name !== name));

  return (
    <div>
      <LogButton />
      <TaskForm addTask={addTaskHandler} />
      <TaskList tasks={tasks} deleteTask={deleteTaskHandler} />
    </div>
  );
};

export default Dashboard;
