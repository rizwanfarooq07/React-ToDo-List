import { useState } from "react";

const NewTask = (props) => {
  const [newTask, setNewTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = ({
        title: newTask
    })
    props.taskAdded(obj)
    setNewTask('')
  };

  return (
    <div className="box">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          required
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default NewTask;
