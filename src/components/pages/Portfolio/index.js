import React from "react";
import "./portfolio.css";
import project1 from "./images/madquickstatsSS.png";
import project2 from "./images/1stteamallprofile.png";
import project3 from "./images/dailyplannerSS.png";
import project4 from "./images/artundergroundSS";
import project5 from "./images/OTSPProfile.png";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1 className="heading">Portfolio</h1>
      <div className="gallery port-column">
        <figure className="port-item">
          <h2 className="item-header">Art Underground</h2>
          <a className="hw1" href="https://art-underground.herokuapp.com/">
            <img src={project4} alt="Art e-commerce" />
          </a>
          <button
            className="github"
            onclick="window.location.href='https://github.com/AndrewT11/ART-underground';"
          >
            Github Repository
          </button>
        </figure>
        <figure className="port-item">
          <h2 className="item-header">On the Same Page</h2>
          <a className="hw1" href="https://on-the-same-page.herokuapp.com/">
            <img src={project5} alt="A book searching/sharing API" />
          </a>
          <button
            className="github"
            onclick="window.location.href='https://github.com/AndrewT11/On-the-Same-Page';"
          >
            Github Repository
          </button>
        </figure>
        <figure className="port-item">
          <h2 className="item-header">Mad Quick Stats</h2>
          <a
            className="hw1"
            href="https://ajax12233512.github.io/Mad-Quick-Stats/"
          >
            <img
              src={project1}
              alt="Updated Basketball and Hockey information"
            />
          </a>
          <button
            className="github"
            onclick="window.location.href='https://github.com/AndrewT11/Mad-Quick-Stats';"
          >
            Github Repository
          </button>
        </figure>
        <figure className="port-item">
          <h2 className="item-header">1st Team All Pro-file</h2>
          <a
            className="hw1"
            href="https://drive.google.com/file/d/1T7l87CgCK__L1DTm9UTIFNQvapC50GnQ/view?usp=sharing"
          >
            <img src={project2} alt="3 Team profile cards" />
          </a>
          <button
            className="github"
            onclick="window.location.href='https://github.com/AndrewT11/1st-Team-All-Pro-file';"
          >
            Github Repository
          </button>
        </figure>
        <figure className="port-item">
          <h2 className="item-header">Daily Planner</h2>
          <a
            href="https://andrewt11.github.io/Daily-Planner-for-Life/"
            className="hw2"
          >
            <img src={project3} alt="Daily planner with time feature" />
          </a>
          <button
            className="github"
            onclick="window.location.href='https://github.com/AndrewT11/Daily-Planner-for-Life';"
          >
            Github Repository
          </button>
        </figure>
      </div>
    </div>
  );
}

export default Portfolio;
