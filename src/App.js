import React, { useState } from "react";
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [resultMessage, setResultMessage] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleButtonClick() {
    if (!inputValue) {
      setResultMessage("Please enter a number");
    } else if (isNaN(inputValue)) {
      setResultMessage("Please enter a valid number");
    } else {
      const inputNumber = Number(inputValue);
      if (inputNumber % 2 === 0) {
        setResultMessage("Number is even");
      } else {
        setResultMessage("Number is odd");
      }
    }
  }
  return (
    <>
      <div className="App">
        <label htmlFor="number-input">Enter a number:</label> <br />

        <input
          type="number"
          id="number-input"
          value={inputValue}
          onChange={handleInputChange} /> <br />

        <button onClick={handleButtonClick}>Check</button> <br />

        <div className="result">{resultMessage}</div>
      </div>
    </>
  );
}

export default App;
