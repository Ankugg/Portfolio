import React from "react";
import "./intro.css";
import profilephoto from "../../img/me.jpg.jpg";

export default function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is </h2>
          <h1 className="i-name">Ankit yadav</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">React Developer</div>
              <div className="i-title-item">Backend Developer</div>
              <div className="i-title-item">M.E.R.N Developer</div>
            </div>
          </div>

          <p className="i-desc">
            I design and develop services for customers of all
            sizes,specializing in creating stylish,modern websites,web services
            and online
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={profilephoto} alt="no internet" className="i-img" />
      </div>
    </div>
  );
}
