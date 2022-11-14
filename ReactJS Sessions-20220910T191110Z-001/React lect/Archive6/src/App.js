import React,{createContext} from 'react';
import './App.css';
import CompA from './contextapi/CompA';

export const NameContext = createContext();
export const LastContext = createContext();
function App() {
  const name = "Shilwant";
  const lastname = "Gupta";
  return (
    <div className="App">
      <NameContext.Provider value={name}>
        <LastContext.Provider value={lastname}>
          <CompA />
        </LastContext.Provider>
      </NameContext.Provider>
    </div>
  );
}

export default App;
