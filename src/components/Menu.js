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
      {menu.map((menu, key)=>{
        return(
          <li key={key}><a href={menu.url}>{menu.text}</a></li>
        )
      })}
    </ul>

    <ul className="subMenu">
      {submenu.map((menu, key)=>{
        return(
          <li key={key}><a href={menu.url}>{menu.text}</a></li>
        )
      })}
    </ul>
    </div>

  );
}

export default Menu;
