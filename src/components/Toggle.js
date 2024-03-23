import { BsFillSunFill , BsFillMoonFill } from "react-icons/bs";
import React, { useState } from "react";

function Toggle() {
  const [darkMode, setDarkMode] = useState(false);
  const changeTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };
  return (
    <div className="toggle" onClick={changeTheme}>
      {darkMode ? (
        <div className="toggle-light">
          <BsFillSunFill /><p>Light Mode</p>
        </div>
      ) : (
        <div className="toggle-dark">
          <BsFillMoonFill />
          <p>Dark Mode</p>
        </div>
      )}
    </div>
  );
}

export default Toggle;
