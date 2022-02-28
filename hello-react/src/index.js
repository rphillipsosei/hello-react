import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.value}</button>
    </>
  );
};

// Add an onClick event handler to the button element
// that triggers the reset function.

// HINT: Because the reset function is defined inside
// of <Appliation>, this part involves passing props too.

const Application = (props) => {
  const [name, setName] = useState("");

  const reset = () => {
    setName("");
  };



  return (
    <main>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type your name"
      />
      <Button value="Reset" name="" onClick={reset} />
      {{name} && <h1>Hello {name}</h1>}
      
    </main>

    
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
