import React from 'react';
import circle_green from "../assets/circle_green.png";
import circle_blue from "../assets/circle_blue.png";

function SubCircle() {
  return (
    <div className="sub-circle">
        <img src={circle_green} className="circle1 circle" alt="circle_green" />
        <img src={circle_blue} className="circle2 circle" alt="circle_blue" />
        <img src={circle_green} className="circle3 circle" alt="circle_green" />
    </div>
  );
}

export default SubCircle;
