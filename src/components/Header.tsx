import React from "react";
import Toggle from "./Toggle.tsx";

function Header() {
  return (
    <header>
      <nav>
          <h1>Where in the world?</h1>
        <Toggle />
      </nav>
    </header>
  );
}

export default Header;
