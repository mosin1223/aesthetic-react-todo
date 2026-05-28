import "./App.css";
function App() {
  return (
    <main className="app">
      <section className="todo-card">
        <p className="eyebrow">Daily Focus</p>
        <h1>Todo App</h1>
        <p className="subtitle">Plan, track, and finish your tasks.</p>
        
        <form className="todo-form">
          <input type="text" placeholder="Add a new task..." />
          <button>Add</button>
        </form>
      </section>
    </main>
  );
}

export default App;
