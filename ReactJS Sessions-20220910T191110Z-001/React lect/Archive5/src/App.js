import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import CounterWithReducer from './CounterWithReducer';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <CounterWithReducer/>
    </div>
  );
}

export default App;
