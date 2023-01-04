import React from 'react';
import '../super.css';
import image from '../images/monster.jpeg';

function AboutMe() {
    return (
        <div className="parent">
            <div className="child_title">About Me</div>
            <img src={image} alt="image" className="childImage" />
            <div className="child_body">
                <text>I am student at Brown University, double-concentrating in Computer Science and Philosophy.</text>
                <text>As a computer science student, I have focused on studies in artificial intelligence/machine learning and cybersecurity. During my summers, I have interned as a web developer, a software developer, and a machine learning engineer. In the process, I have come to appreciate the unique capacity that machine learning has to simplify human work and free people from repetitive, time-consuming tasks. This is a genuinely world-changing technology, and I hope to be part of its development.</text>
                <text>At the same time, my history in both computer science and philosophy have given me a unique outlook on how technology interacts with the human world. It's not enough that technology exists; it should be direct towards human ends. My hope is that I can bring a human-centered perspective with me to my job as well as a technology-focused one.</text>
                <text>Ultimately, I'm a code monkey with an interest in how humans think. I plan to build technologies that help other people, and I hope to have a good time while doing it!</text>
            </div>
        </div>
    );
}

export default AboutMe;
