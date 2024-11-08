import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://cdn.discordapp.com/attachments/893216248102527006/1304234334839902208/ye.jpg?ex=672ea660&is=672d54e0&hm=98129d348d2600cbb35b88fad43a2d27ec459f04f1d7005d5e636f027da0076d&" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/iNanzo" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/newtonmhoang/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Newton Hoang</h1>
          <p>Front-End Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/iNanzo" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/newtonmhoang/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;