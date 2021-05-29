import { useState } from "react";
import Home from "./Home";

const Dummy_Task = [
  {
    id: "e1",
    title: "Welcome to my ToDo List",
  },
  {
    id: "e2",
    title: "Winter is coming",
  },
  {
    id: "e3",
    title: "UCL in two days",
  },
];

function App() {
  const [taskList, setTaskList] = useState(Dummy_Task);

  const updateAddedTask = (updatedTask) => {
    setTaskList((prevState) => {
      return [...prevState, updatedTask];
    });
    console.log('From app.js');
    console.log(updatedTask);
  };

  return (
    <div className="App">
      <Home tasks={taskList} onAddingTask={updateAddedTask} />
    </div>
  );
}

export default App;
