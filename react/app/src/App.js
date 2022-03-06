import { useState } from "react";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-6xl font-mono font-semibold">Our App.</h1>
        <Counter />
      </div>
    </div>
  );
}

export default App;
