import React from 'react';

const Recipe = ({title,source,image,ingredients,url}) => {
    return (
      <div>
        <h1>{title}</h1>
          <ol>
            {ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
                ))}
          </ol>
            <img src={image} alt=""/>
          <h6>Source: {source}</h6>
          <p>{url}</p>
      </div>
  );
};

export default Recipe;
