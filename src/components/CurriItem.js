import React from 'react';
// import './Curriculum.css';

function CurriItem({ data }) {
  return (
    <div className="curri-item">
        <span className="f-35 curri-num">{data.num}</span>
        <div className={"curri-circle " + data.color}>
          <div className="curri-circle-txt f-14">
            {data.txt[0]}<br />
            {data.txt[1]}<br />
            {data.txt[2]}
          </div>
        </div>
        <div className="curri-detail f-14">
            {data.detail[0]}<br />
            {data.detail[1]}<br />
            {data.detail[2]}<br />
            {data.detail[3]}
        </div>
    </div>
  );
}

export default CurriItem;
