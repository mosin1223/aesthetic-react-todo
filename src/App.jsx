import { useState } from "react";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    setTodos([...todos, { id: Date.now(), text: taskText, completed: false }]);
    setTaskText("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <main className="app">
      <section className="todo-card">
        <p className="eyebrow">Daily Focus</p>
        <h1>Todo App</h1>
        <p className="subtitle">Plan, track, and finish your tasks.</p>

        <form className="todo-form" onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Add a new task..."
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />{" "}
          <button>Add</button>
        </form>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <button
                className="check-btn"
                type="button"
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.completed ? "✓" : ""}
              </button>
              <span>{todo.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
