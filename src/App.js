import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const APP_ID = "e68ea2e3";
  const APP_KEY = "e2b884a702c9d17c60ecb553245bcd23";


  useEffect( () => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
    const data = await response.json();
    console.log(data);  
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="serch-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
