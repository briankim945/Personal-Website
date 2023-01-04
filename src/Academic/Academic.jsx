import React from 'react';
import '../super.css';
import image from '../images/Brown.jpeg';

function Academic() {
    return (
        <div className="parent">
            <div className="child_title">Academic Career</div>
            <img src={image} alt="image" className="childImage" />
            <div className="child_body">
                <text>I am currently going into my last semester at Brown University and will be graduating as with a bachelor of science in computer science and a bachelor of arts in philosophy. I currently hold a 3.9 GPA.</text>
                <text>In computer science, I have followed the artificial intelligence/machine learning pathway and the cybersecurity pathway. I came into college knowing that I wanted to pursue artificial intelligence in some way, but I really found my footing with CSCI 1430: Computer Vision. There, I was introduced to a broad overview of the current state of computer vision, from the basics of fourier transforms and edge detection to the current state-of-the-art research on convolutional neural networks. Computer vision remains one of the most interesting problems in artificial intelligence to me, and I hope to work in the field in the future.</text>
                <text>I started following the cybersecurity track fairly late, after taking CSCI 0320: Introduction to Software Engineering. In the course, one of the assignments introduced us to buffer overflows and tasked us with finding overflows in a vulnerable file, and then implementing security measures. I admit that I found the task of breaking software much more engaging than building it. Since then, I have taken CSCI 1660: Introduction to Computer System Security and CSCI 1650: Software Security Exploitation.</text>
                <text>Even before I started school, I planned to take a humanities concentration alongside my computer science concentration. After some initial exploration, I was won over to philosophy by PHIL 0080: Existentialism. There, I found that many of the questions about life, love, and uncertainty were questions that had been probed by greater minds before me, and I wanted to learn what they had to say. Since then, I have developed a greater focus on intellectual history, exploring how ideas have evolved from the time of the ancient Greeks to the Renaissance and all the way to modern thinkers today.</text>
            </div>
        </div>
    );
}

export default Academic;
