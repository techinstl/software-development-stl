import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Testing from "./components/Testing";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
