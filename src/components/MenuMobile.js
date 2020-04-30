import React from 'react';

function MenuMobile() {
  return (
    <div className="menuMobile">
        <div className="menuButton" id="menuButtonM">
        <span></span>
        <span></span>
        <span></span>
        </div>
        <div className="menuMobileWrap">
            <ul className="gnb" id="gnbM">
                <li>
                    <a href="/vision">VISION<div className="underline"></div></a>
                </li>
                <li>
                    <a href="/history">HISTORY<div className="underline"></div></a>
                </li>
                <li>
                    <a href="/program/school/vision">PROGRAM<div className="underline"></div></a>
                    <ul className="subMenu">
                        <li>
                            <a href="/program/school/vision">스쿨과정<div className="underline"></div></a>
                        </li>
                        <li>
                            <a href="/program/vivaldi">비발디<div className="underline"></div></a>
                        </li>
                        <li>
                            <a href="/program/kgongvi">크공비<div className="underline"></div></a>
                        </li>
                        <li>
                            <a href="/program/silkroad">실크로드<div className="underline"></div></a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/recruit">RECRUIT<div className="underline"></div></a>
                </li>
                <li>
                    <a href="/contact">CONTACT<div className="underline"></div></a>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default MenuMobile;
