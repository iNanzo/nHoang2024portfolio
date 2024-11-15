import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Web Development</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/lyssg2/extracted" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/lyssg2/extracted" target="_blank" rel="noreferrer"><h2>extracted.</h2></a>
                <p>Extracted is a website that presents the best coffee shops in Seattle and Portland, with reviews posted by users to view to help make a decision on where to get their next cup of joe.</p>
            </div>
            <div className="project">
                <a href="https://github.com/SnkrFr3sh/sport_facts" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/SnkrFr3sh/sport_facts" target="_blank" rel="noreferrer"><h2>NBA Sports Facts</h2></a>
                <p>A site used to get quick basic information on NBA players, past and present. Focusied on implementing the Free NBA and Bing Image APIs.</p>
            </div>
            <div className="project">
                <a href="https://github.com/iNanzo/NMH_NoteTaker" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/iNanzo/NMH_NoteTaker" target="_blank" rel="noreferrer"><h2>Note Taker</h2></a>
                <p>A simple backend focused note taker.</p>
            </div>
            <div className="project">
                <a href="https://github.com/iNanzo/NMH_WeatherDashboard" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/iNanzo/NMH_WeatherDashboard" target="_blank" rel="noreferrer"><h2>Weather Dashboard</h2></a>
                <p>A project with heavy focus on OpenWeather API usage. Learned a lot about general API use.</p>
            </div>
            <div className="project">
                <a href="https://github.com/iNanzo/NMH_CodeQuiz" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/iNanzo/NMH_CodeQuiz" target="_blank" rel="noreferrer"><h2>Code Quiz</h2></a>
                <p>A code quiz that makes use of append and localStorage functions.</p>
            </div>
            <div className="project">
                <a href="https://github.com/iNanzo/NMH_JATEtextEditor" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/iNanzo/NMH_JATEtextEditor" target="_blank" rel="noreferrer"><h2>JATE Editor</h2></a>
                <p>A PWA text editor that can be used locally offline, or downloaded as a browser extension.</p>
            </div>
            {/*
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div> */}
        </div>
        <h1>Game Development</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://ngutn24.itch.io/time-to-grow" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ngutn24.itch.io/time-to-grow" target="_blank" rel="noreferrer"><h2>Time to Grow</h2></a>
                <p>A project done alongside a friend for a Game Jam with the theme of growth.</p>
            </div>
        </div>
    </div>   
    );
    
}

export default Project;