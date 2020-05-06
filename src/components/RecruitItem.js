import React from 'react';
import '../App.css';

function RecruitItem({num, txt, img, detail}) {
  return (
    <div className="recruit-item">
        <div className="icon"><img src={img} alt="recruit-item-img"/></div>
        <span className="num f-60">{num}</span>
        <span className="txt f-25">{txt}</span>

        <div className="recruit-item-detail f-15">
            {detail[0]}<br/>
            {detail[1]}<br/>
            {detail[2]}
        </div>   
    </div>
  );
}

export default RecruitItem;
