import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <p>
      Success
    </p>
  )
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false
