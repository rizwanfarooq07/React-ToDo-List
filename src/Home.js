import NewTask from "./NewTask";

const Home = (props) => {

  const onTaskAdded = (addedTask) => {
    const updatedTask = {
      ...addedTask,
      id: Math.random().toString()
    }
    props.onAddingTask(updatedTask);
  }

  return (
    <div>
      <div className="box">
        {props.tasks.map((task) => (
          <div key={task.id}>
            <li>{task.title}</li>
          </div>
        ))}
      </div>
      <div className="box">
        <NewTask taskAdded={onTaskAdded} />
      </div>
    </div>
  );
};

export default Home;
