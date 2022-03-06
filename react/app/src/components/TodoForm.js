import React, { useState } from "react";

export const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    console.log("Value changed to: " + event.target.value);
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos(data => [...data, todo]);
  };

  return (
    <div className="flex flex-col space-y-6">
      <form onSubmit={handleSubmit} className="flex flex-col p-4 space-y-2">
        <label>Todo:</label>
        <input
          value={todo}
          onChange={handleChange}
          className="px-4 py-2 border-2 border-black shadow-lg rounded-xl"
        />
        <button
          type="submit"
          className="px-2 py-3 bg-black text-white font-mono rounded-xl"
        >
          Add Todo.
        </button>
      </form>
      <ul className="flex flex-col space-y-2 p-1">
        {todos.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
};
