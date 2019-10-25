import React from 'react';
import { formatTitle, formatSource, formatImage, formatIngredient, formatUrl } from '../formatters';


const Recipe = ({ title, source, image, ingredients, url }) => {  
 
  return (
    <div className="col-md-4" style={{ marginBottom: "2rem" }}>
      <h1 className="recipes_title">
        {formatTitle(title)}
      </h1>
      <img src={formatImage(image)} alt="" />
      <ol>
        {ingredients.map(ingredient => (
          <li>{formatIngredient(ingredient)}</li>
        ))}
      </ol>
      <h6>Source: {formatSource(source)} 
      </h6>
      <p>
        <a href={url}>
          {formatUrl(url)}
        </a>
      </p>
    </div>
    
  );
};

export default Recipe;
