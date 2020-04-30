import React from 'react';
import MainSlider from '../components/MainSlider';
import logo from "../assets/logo.png";

function Main() {
  return (
    <main>
      <div className="wrap">
      <h1><a href="/"><img src={logo} alt="메인로고" /></a></h1>
        <div className="mainLink_wrap">
          <div className="mainLink blue">
              <p>Mentoring-lab에<br />대해 알고 싶으세요?</p>
              <div className="link">
                <a href="/">홈페이지</a>
              </div>
          </div>
          <div className="mainLink green">
              <p>꿈꾸는 많은 사람들과<br />소통해보고 싶으세요?</p>
              <div className="link">
                  <a href="https://cafe.naver.com/mentoringlab">카페</a>
              </div>  
          </div>
        </div>
      </div>
      <MainSlider />
    </main>
  );
}

export default Main;
