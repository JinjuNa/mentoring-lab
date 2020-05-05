import React from 'react';
import '../App.css';

function RecruitItem({num, txt, img, detail}) {
  return (
    <div className="recruit-item"> 
    {/* ㄴ이건신경안씀? */}
        <div className="icon"><img src={img} alt="recruit-item-img"/></div>
        <span className="num">{num}</span>
        <span className="txt">{txt}</span>

        <div className="recruit-item-detail">
            {detail[0]}<br/>
            {detail[1]}<br/>
            {detail[2]}
        </div>   
    </div>
  );
}

export default RecruitItem;
