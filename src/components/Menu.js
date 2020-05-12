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

  function clickMenu(){
    var gnb = document.getElementById("gnb");
    gnb.classList.toggle('active');
  }

  function subOver(index){
    const sub = document.querySelector('.sub-menu');
      sub.style.display = "none";
      if(index !== 2) return
      sub.style.display = "block";
  }

  function subHide(){
    // const sub = document.querySelector('.sub-menu');
    // sub.style.display = "none";
  }

  return (
    <div className="menu">
    <div className="menu-button" onClick={()=> clickMenu()}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className="gnb active" id="gnb">
      {menu.map((menu, key)=>{
        return(
          <li key={key}><a href={menu.url} onMouseOver={()=>subOver(key)} onMouseOut={()=>subHide()}>{menu.text}<div class="menu-underline"></div></a></li>
        )
      })}
    </ul>

    <ul className="sub-menu">
      {submenu.map((menu, key)=>{
        return(
          <li key={key}><a href={menu.url}>{menu.text}<div class="menu-underline"></div></a></li>
        )
      })}
    </ul>
    </div>

  );
}

export default Menu;
