import React from 'react';
import './Curriculum.css';

function CurriItem({ data }) {
  return (
    <div className="curri-item">
        <span>{data.num}</span>
        <div className={"curri-cercle " + data.color}>
            {data.txt[0]}<br />
            {data.txt[1]}<br />
            {data.txt[2]}
        </div>
        <div className="curri-detail">
            {data.detail[0]}<br />
            {data.detail[1]}<br />
            {data.detail[2]}<br />
            {data.detail[3]}
        </div>
    </div>
  );
}

export default CurriItem;
