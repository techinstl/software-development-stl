import { useState } from "react";
import { TodoForm } from "./components/TodoForm";

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-6xl font-mono font-semibold">To-do List App</h1>
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
