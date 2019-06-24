import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const APP_ID = "e68ea2e3";
  const APP_KEY = "e2b884a702c9d17c60ecb553245bcd23";

  const exampleReq = 
  "https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="serch-button" type="submit">Search</button>
      </form>
    </div>
  );
};

export default App;
