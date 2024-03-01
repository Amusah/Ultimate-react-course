import { useState } from "react";

import tick from "./assets/tick.svg";
import trash from "./assets/trash.svg";

const todoList = [
  { id: 1, task: "React", completed: false },
  { id: 2, task: "TypeScript", completed: false },
  { id: 3, task: "HTML / Sass", completed: true },
];

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(todo) {
    setTodos((todos) => [...todos, todo]);
  }

  function handleDeleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function handleToggleTodo(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div className="container">
      <Header />
      <Form onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

function Header() {
  return <h1 className="header">Just do it.</h1>;
}

function Form({ onAddTodo }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!task) return;

    const todo = { id: Date.now(), task, completed: false };
    console.log(todo);

    onAddTodo(todo);

    setTask("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Add a task"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>I Got This!</button>
    </form>
  );
}

function TaskList({ todos, onDeleteTodo, onToggleTodo }) {
  return (
    <>
      <ul>
        {todos.map((list) => (
          <Task list={list} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} key={list.id} />
        ))}
      </ul>
    </>
  );
}

function Task({ list, onDeleteTodo, onToggleTodo }) {
  return (
    <li className="task">
      <p style={list.completed ? { textDecoration: "line-through" } : {}}>
        {list.task}
      </p>
      <div>
        {/* {!list.completed && (
          <span className="icon" onClick={() => onToggleTodo(list.id)}>
            <img src={tick} alt="Check-icon" />
          </span>
        )} */}
        <span className="icon" onClick={() => onToggleTodo(list.id)}>
          <img src={tick} alt="Check-icon" />
        </span>

        <span className="icon" onClick={() => onDeleteTodo(list.id)}>
          <img src={trash} alt="trash-icon" />
        </span>
      </div>
    </li>
  );
}

export default App;
