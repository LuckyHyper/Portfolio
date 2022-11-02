import React from 'react';
import logo from '../assets/bg-white.png';
import MainRightSection from '../components/MainRightSection';

function Main() {
  return (
    <div className="row main">
      <div className="col-s main-left">
        <div className="left-vertical-line"></div>
      </div>
      <div className="col main-middle">
        <h2 className="phrase-1">Hi,</h2>
        <h1 className="phrase-2">I'm Hechmi,</h1>
        <h1 className="phrase-2">Web Developer</h1>
        <p className="phrase-3">Frontend & Backend Developer</p>
        <div className="main-image-section">
          <img className="main-image" src={logo} alt="yoo" />
        </div>
      </div>
      <div className="col-s main-right">
        <MainRightSection />
        <div className="right-vertical-line"></div>
      </div>
    </div>
  );
}

export default Main;
