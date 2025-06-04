import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!task.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  }

  function handleDelete(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <span>{t.text}</span>
            <button onClick={() => handleDelete(t.id)} aria-label={`Delete task: ${t.text}`}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
