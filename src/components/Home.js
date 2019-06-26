import React from 'react';
import HomeButton from './HomeButton';
import CookBook_photo from './Cookbook_photo.jpg'
import Header from './Header';

const Home = () => (
  <div>
    <Header />
    <div  className="Home content-wrapper">
      <img src={CookBook_photo} />
      <div class="text-wrapper">
      <h1 className="Home-title"><HomeButton /></h1>
      </div>
    </div>
  </div>
  )

export default Home;