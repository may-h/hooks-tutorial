import React, { useState } from "react";
import Info from "./Average";
import "./App.css";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible ? <Info /> : null}
    </div>
  );
};
export default App;
