import React from 'react';
import '../App.css';
import sub_effect from "../assets/sub_effect.png";

function SubTitle({title, size}) {
  return (
    <div className="sub-title">
        <img className="sub-effect" src={sub_effect} alt="sub_effect" />
        <p className={"title-text "+size}>
            {title}
        </p>
    </div>
  );
}

export default SubTitle;
