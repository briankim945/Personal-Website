import React from 'react';
import './Work.css';
import '../super.css';
import thImage from '../images/thayer_mahan.png';
import taggImage from '../images/tagg.png';
import boykinImage from '../images/boykin.jpg';

function Work() {
    return (
        <div className="parent">
            <div className="child_title">Work Experience</div>
            <div className="carrier th">
                <img src={thImage} alt="ThayerMahan" className="th-image" />
            </div>
            <div className="child_body">
                <text>Dates: May 2022 - August 2022</text>
                <text>During my internship at ThayerMahan, a maritime research company, my responsibilities were two independent projects. The first was a summer-long research project on the practicality of using machine learning models on existing company maritime data to identify ships. The data came in the form of snippets of audio taken from underwater recording devices, where human analysts were able to identify passing ships based on the audio. To this end, I carried out an exploratory data analysis of the audio files to get a sense an any trends and patterns in the data and built out a series of lightweight convolutional neural networks that were trained and tested on the data.</text>
                <text>My second project was a side project in ship re-identification using that same audio data. This was a smaller project that gave me an opportunity to explore state-of-the-art image and vehicle re-identification techniques. I implemented a residual network improved with multi-domain learning and identity mining based on a paper presented at a recent computer vision conference, and used the results from the model in a presentation on the viability of this approach in the company's data.</text>
                <text>For both of the projects, I provided weekly updates to the AI Systems team and at the end of the year, was given the opportunity to present my findings on the first project to the company as a whole, including executives. In my presentation, I laid out the findings of my data analysis, focusing on a number of areas where the data was clearly heavily skewed, such as the extremely high proportion of merchant vessels to other ship types, and I used the results of my AI model experimentation to argue for the use of machine learning in this problem.</text>
            </div>
            <div className="carrier tg">
                <img src={taggImage} alt="T@gg" className="th-image" />
            </div>
            <div className="child_body">
                <text>Dates: May 2021 - August 2021</text>
                <text>T@gg is a social media startup in the New England area focused on college students that aims at connecting artists and content creators. </text>
                <text>As a software engineer, my responsibilities were focused on building out and maintaining the front-end and back-end components of the iPhone T@gg app as part of the development team. In this capacity, I worked closely with both the design and product teams, taking in requests for new features, building them out in the development app, reviewing them with other developers, and then pushing them to production. As I got more experience, I was also able to take propose and implement features of my own. These features were mainly focused around the creating, storing, and presenting profiles and "Moments" created by users, especially as new, interactive video and text Moments were added and the database had to be updated, with changes to both the front-end and the back-end, as new features were added.</text>
                <text>Towards the end of my internship, I was part of a new data science team looking to design a recommendation algorithm for the app. My work was mainly with using my existing experience with the back-end database first to deploy a fairly basic recommendation algorithm within the back-end to provide a curated selection of responses to requests from a user for either other user profiles or social media posts. Later, I worked on building a pipeline from the database to a new AWS instance where a more advanced recommendation algorithm could be trained and tested on the data.</text>
            </div><div className="carrier bk">
                <img src={boykinImage} alt="Boykin Lab" className="th-image" />
            </div>
            <div className="child_body">
                <text>Dates: May 2020 - January 2021</text>
                <text>Boykin Lab (now the Race Identity and Social Environments lab) is a psychology research lab, formerly at Brown University, that studies preferences for group inequality in America. I was hired as a web developer, with the responsibility to create a web-based survey platform that could be used by researchers in the lab. To this end, I and another student intern built a basic platform, mainly using React.js and Express.js, to allow users to create a survey using a set of options for question types and then send out this survey as a link, with results being saved to a MongoDB database. This meant building a researcher-focused platform for researchers to create their own surveys, save them, and edit them, and building a survey participant-focused platform that only allowed users to take the survey that they had been linked to. I also onboarded a new student intern when the school year began, introducing them to my codebase and helping them get started.</text>
            </div>
        </div>
    );
}

export default Work;