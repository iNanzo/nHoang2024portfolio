import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Python",
    ".NET",
    "MaterializeCSS",
    "jQuery",
    "SQL",
    "mySQL",
    "MongoDB",
    "AJAX",
    "JSON",
    "NodeJS",
    "ExpressJS",
];

const labelsSecond = [
    "Figma",
    "Adobe XD",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Clip Studio Paint",
    "Usability Testing",
];

const labelsThird = [
    "C#",
    "Python",
    "Unity",
    "Unreal Engine",
    "ZBrush",
    "Maya",
    "Blender",
    "Digital Game Design",
    "Tabletop Game Design",
    "Prototyping",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="expertise-container">
            <h1>Expertise</h1>
            <div className="expertise-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>Despite my specialization in UX/UI and front-end design, I have training in building a variety of web applications from scratch using modern technologies such as React and SQL. I have experience working with diverse teams throughout the SDLC process, covering both front-end and back-end development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech Stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>UX/UI Design</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Design Tools & Methods:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Game Development</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Design Tools & Methods:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;