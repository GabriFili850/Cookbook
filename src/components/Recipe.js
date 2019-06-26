import React from 'react';

const Recipe = ({ title, source, image, ingredients, url }) => {
  return (
    <div className="col-md-4" style={{ marginBottom: "2rem" }}>
      <h1 className="recipes_title">
        {title.length < 20 ? `${title}` : `${title.substring(0, 25)}...`}
      </h1>
      <img src={image} alt="" />
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <h6>Source: {source}</h6>
      <p>
        <a href={url}>
          {url}
        </a>
      </p>
    </div>
  );
};

export default Recipe;
