import logo from './logo.svg';
import './App.css';
import TemperatureConverter from './components/TemperatureConverter';
import Todo from './components/Todo';


const message = "This is the message from variable message";

function App() {
  
  return (
    <div className="App">
      <TemperatureConverter />
      <Todo />
    </div>
  );
}


export default App;
