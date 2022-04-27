import React from "react";
import "./home.css";
import Turntable from "./images/turntable.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <div className="home-left-wrapper">
          <h2 className="home-greeting">Salutations, you've stumbled upon</h2>
          <h1 className="home-name">
            Andrew Tran's <br />
            Portfolio Page
          </h1>
          <div className="home-title">
            <div className="home-title-wrapper">
              <div className="home-title-jobs">Web Developer</div>
              <div className="home-title-jobs2">Problem Solver</div>
              <div className="home-title-jobs3">Dog Father</div>
              <div className="home-title-jobs4">Basketball Junkie</div>
              <div className="home-title-jobs5">Sci-fi Nerd</div>
            </div>
          </div>
          <div className="home-desc">
            Full-stack web developer interested in creating websites and
            applications, with especial interest in React.
          </div>
        </div>
      </div>
      <div className="home-right">
        <img src={Turntable} alt="" className="home-image"></img>
      </div>
    </div>
  );
}
