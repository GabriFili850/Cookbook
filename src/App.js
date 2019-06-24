import React, { useEffect, useState } from 'react';
import "./App.css";
import Recipe from './components/Recipe';

const App = () => {
  const APP_ID = "e68ea2e3";
  const APP_KEY = "e2b884a702c9d17c60ecb553245bcd23";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect( () => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
      );

    const data = await response.json();
    setRecipes(data.hits);  
    console.log(data.hits);
    
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search}/>
        <button className="serch-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        //use .map because recepies is an array and i need to map all the objects, and i need to use a parenthesis because i want to return html/jsx
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
