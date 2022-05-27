import React from 'react';
import './Home.css';
import image from './images/Brian_Pic.png';

function Home() {
  return (
    <div className="Home">
        <div id="right" className="descriptionContainer">Hello, World!</div>
        <div id="left" className="userImageContainer">
            <img src={image} alt="image" className="userImage" /
        ></div>
      
    </div>
  );
}

export default Home;
