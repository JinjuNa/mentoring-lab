import React from 'react';
import circle_green from "../assets/circle_green.png";
import circle_blue from "../assets/circle_blue.png";

function SubCircle() {
  return (
    <div class="sub-circle">
        <img src={circle_green} class="circle1 circle" alt="circle_green" />
        <img src={circle_blue} class="circle2 circle" alt="circle_blue" />
        <img src={circle_green} class="circle3 circle" alt="circle_green" />
    </div>
  );
}

export default SubCircle;
