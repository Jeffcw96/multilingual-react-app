import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./About";
import Home from "./Home";

function App() {
  {
    /* Add default language from local storage code below */
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Add your language switcher code below */}
    </>
  );
}

export default App;
