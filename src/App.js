import './App.css';
import {ReceiveMinMaxValue} from "./tasks/ReceiveMinMaxValue";
import {Factorial} from "./tasks/Factorial";
import {Fibonacci} from "./tasks/Fibonacci";

function App() {
  return (
    <div className="App">
      <ReceiveMinMaxValue/>
      <Factorial factorialNumber={5}/>
      <Fibonacci fibonacciNumber={10}/>
    </div>
  );
}

export default App;
