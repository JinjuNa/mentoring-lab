import React from 'react';
import MainSlider from '../components/MainSlider';
import logo from "../assets/logo.png";

function Main() {
  return (
    <main>
      <div className="wrap">
        <h1><a href="/"><img src={logo} alt="메인로고" /></a></h1>
        <div className="mainlink-wrap">
          <div className="mainlink blue">
              <div className="mainlink-text">
              <p className="f-35">MENTORING-LAB에<br />대해 알고 싶으세요?</p>
              <div className="button">
                <a href="/">홈페이지</a>
              </div>
              </div>
          </div>
          <div className="mainlink green">
            <div className="mainlink-text">
              <p className="f-35">꿈꾸는 많은 사람들과<br />소통해보고 싶으세요?</p>
              <div className="button">
                  <a href="https://cafe.naver.com/mentoringlab" target="_blank" rel="noopener noreferrer">카페</a>
              </div>
            </div>  
          </div>
        </div>
      </div>
      <div className="slider-container">
      <MainSlider />
      </div>
    </main>
  );
}

export default Main;
