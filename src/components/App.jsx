import React from "react";
import Heading from "./Heading";
import Luck from "./Luck";
import Name from "./Name";
import Math from "./Math";

function App() {
  return (
    <div className="flex-container">
      <Heading />
      <Math />
      <Luck />
      <Name />
    </div>
  );
}

export default App;
