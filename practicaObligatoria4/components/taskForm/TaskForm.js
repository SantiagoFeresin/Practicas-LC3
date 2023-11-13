import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [name, setName] = useState("");

  const changeHandler = (event) => setName(event.target.value);

  const addTaskHandler = () =>
    name.length > 0 ? addTask(name) : alert("Ingrese una tarea");

  return (
    <div>
      <input
        onChange={changeHandler}
        value={name}
        placeholder="Tarea a rastrear"
      ></input>
      <button onClick={addTaskHandler}>Aceptar</button>
    </div>
  );
};

export default TaskForm;
