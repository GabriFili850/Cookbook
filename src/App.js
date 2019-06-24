import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const APP_ID = "e68ea2e3";
  const APP_KEY = "e2b884a702c9d17c60ecb553245bcd23";
  const exampleReq = 
  "https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Effect has been run');
    
  })
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button 
          onClick={() => setCounter(counter + 1)}
          className="serch-button"
          type="submit"
        >
          {counter}
        </button>
      </form>
    </div>
  );
};

export default App;
