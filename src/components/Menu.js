import React from 'react';

function Menu() {

  const menu = [
    {text : "VISION", url : "/vision"},
    {text : "HISTORY", url : "/history"},
    {text : "PROGRAM", url : "/program/school/vision"},
    {text : "RECRUIT", url : "/recruit"},
    {text : "CONTACT", url : "/contact"}
  ];

  const submenu = [
    {text : "스쿨과정", url : "/program/school/vision"},
    {text : "비발디", url : "/program/vivaldi"},
    {text : "크공비", url : "/program/kgongvi"},
    {text : "실크로드", url : "/program/silkroad"}
  ];

  return (
    <div className="menu">
    <div className="menuButton" id="menuButton">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className="gnb" id="gnb">
        <li>
          메인메뉴 아이템
          {/* <div className="underline"></span> */}
        </li>
    </ul>

    <ul className="subMenu">
      <li>
        서브메뉴 아이템
        {/* <div className="underline"></span> */}
      </li>
    </ul>
    </div>

  );
}

export default Menu;
