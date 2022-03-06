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
    setTodos((data) => [...data, todo]);
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
          <li className="flex items-center space-x-2">
            <div className="items-center border-2 flex justify-start border-black w-full px-2 py-4 rounded-xl transition duration-500 hover:shadow-lg hover:shadow-cyan-500">
              * {element}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
