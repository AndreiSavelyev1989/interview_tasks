import './App.css';
import {ReceiveMinMaxValue} from "./tasks/ReceiveMinMaxValue";
import {Factorial} from "./tasks/Factorial";
import {Fibonacci} from "./tasks/Fibonacci";
import {SumAllNumbers} from "./tasks/SumAllNumbers";

function App() {
  return (
    <div className="App">
      <ReceiveMinMaxValue/>
      <Factorial factorialNumber={5}/>
      <Fibonacci fibonacciNumber={10}/>
      <SumAllNumbers number={12}/>
    </div>
  );
}

export default App;
