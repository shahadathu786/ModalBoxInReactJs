import React from "react";
import ReactDOM from "react-dom";
import ModalBox from "./Components/ModalBox";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ModalBox />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
