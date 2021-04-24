import React from "react";
import "./Theme.css";

function Theme() {
  const [darkMode, setDarkMode] = React.useState(false);
  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);
  return (
    <div>
      {darkMode ? (
        <button onClick={() => setDarkMode(!darkMode)} className="light">
          Light Mode
        </button>
      ) : (
        <button onClick={() => setDarkMode(!darkMode)} className="dark">
          Dark Mode
        </button>
      )}
    </div>
  );
}

export default Theme;
