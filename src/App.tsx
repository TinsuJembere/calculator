import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState("")
  const [currentNumber, setCurrentNumber] = useState(""); 
  const [previousNumber, setPreviousNumber] = useState(null);
  const [operator, setOperator] = useState(null); 

  const handleNumberClick = (num) => {
    setCurrentNumber((prev) => prev + num); 
    setDisplay((prev) => prev + num); 
  };

  const handleOperatorClick = (op) => {
    if (currentNumber) {
      setPreviousNumber(currentNumber); 
      setCurrentNumber("");
      setOperator(op); 
      setDisplay((prev) => prev + " " + op + " "); 
    }
  };

  
  const calculate = () => {
    if (previousNumber && currentNumber && operator) {
      const a = parseFloat(previousNumber);
      const b = parseFloat(currentNumber);
      let result;

      switch (operator) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = b !== 0 ? a / b : "Error"; 
          break;
        default:
          return;
      }

      setDisplay(result.toString());
      setCurrentNumber(result.toString());
      setPreviousNumber(null);
      setOperator(null);
    }
  };

  const clear = () => {
    setDisplay("0");
    setCurrentNumber("");
    setPreviousNumber(null);
    setOperator(null);
  };



  return (
    <div id="container">
    <div id="inner-container">
    <div id="display">{display}</div>
    <div id="row">
          <div id="ac" onClick={clear}>AC</div>
          <div id="percent" onClick={() => handleOperatorClick("%")}>%</div>
          <div id="plus-or-minus" onClick={() => setCurrentNumber((prev) => (-parseFloat(prev)).toString())}>+/-</div>
          <div id="divide" onClick={() => handleOperatorClick("/")}>/</div>
          <div id="seven" onClick={() => handleNumberClick("7")}>7</div>
          <div id="eight" onClick={() => handleNumberClick("8")}>8</div>
          <div id="nine" onClick={() => handleNumberClick("9")}>9</div>
          <div id="multiply" onClick={() => handleOperatorClick("*")}>*</div>
          <div id="four" onClick={() => handleNumberClick("4")}>4</div>
          <div id="five" onClick={() => handleNumberClick("5")}>5</div>
          <div id="six" onClick={() => handleNumberClick("6")}>6</div>
          <div id="minus" onClick={() => handleOperatorClick("-")}>-</div>
          <div id="one" onClick={() => handleNumberClick("1")}>1</div>
          <div id="two" onClick={() => handleNumberClick("2")}>2</div>
          <div id="three" onClick={() => handleNumberClick("3")}>3</div>
          <div id="plus" onClick={() => handleOperatorClick("+")}>+</div>
          <div id="zero" onClick={() => handleNumberClick("0")}>0</div>
          <div id="fullStop" onClick={() => handleNumberClick(".")}>.</div>
          <div id="equal" onClick={calculate}>=</div>
        </div>
    </div>
    <div>Designed and developed by Tinsae J.</div>
    </div>
  )
}

export default App
