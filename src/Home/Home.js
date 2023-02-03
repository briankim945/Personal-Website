import React from 'react';
import './Home.css';
import image from '../images/Brian_Pic.png';

function Home() {
  return (
    <div className="Home">
      <div id="right" className="descriptionContainer">
        <text className="text title">Brian Kim</text>
        <text className="text">Software Developer</text>
        <text className="text">Machine Learning Engineer</text>
        <text className="text"><a href="https://www.linkedin.com/in/brian-kim-37112819a/">LinkedIn</a></text>
      </div>
      <div id="left" className="userImageContainer">
        <img src={image} alt="image" className="userImage" />
      </div>

    </div>
  );
}

export default Home;
