
import React from 'react';
import { REACT_APP_API_TOKEN } from './config'
import './App.css';


function App() {
  
  return (
    <div className="App">
      <p>Env variable is {REACT_APP_API_TOKEN}</p>
    </div>
  );
}


export default App;
