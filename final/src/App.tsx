import i18n from "./language";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./About";
import Home from "./Home";
import { useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [defaultLanguage, setDefaultLanguage] = useLocalStorage(
    "language",
    "en"
  );
  function changeLanguage(language: "en" | "cn") {
    i18n.changeLanguage(language);
    setDefaultLanguage(language);
  }

  useEffect(() => {
    i18n.changeLanguage(defaultLanguage);
  }, [defaultLanguage]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("cn")}>Chinese</button>
    </>
  );
}

export default App;
