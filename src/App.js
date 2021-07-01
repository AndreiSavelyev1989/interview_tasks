import './App.css';
import {ReceiveMinMaxValue} from "./tasks/ReceiveMinMaxValue";
import {Factorial} from "./tasks/Factorial";

function App() {
  return (
    <div className="App">
      <ReceiveMinMaxValue/>
      <Factorial factorialNumber={5}/>
    </div>
  );
}

export default App;
