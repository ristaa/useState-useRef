import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let SetCounterTo = () => {
  let [number, setNumber] = useState(0);
  let numberRef = useRef();

  const addTo = () => {
    setNumber(Number(number) + Number(numberRef.current.value));
  };

  return (
    <div>
      <p>{number}</p>

      <div>
        <input ref={numberRef} type="text" />
        <button type="button" onClick={() => addTo()}>
          Submit
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <SetCounterTo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
