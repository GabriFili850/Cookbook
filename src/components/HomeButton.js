import React from 'react';
import { Link } from 'react-router-dom';


const HomeButton = () => (
    <button className="home-button" type="submit">
      <Link to="/recipe/search">LET'S COOK</Link>
    </button>
)

export default HomeButton;