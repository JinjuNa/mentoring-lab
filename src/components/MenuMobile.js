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
                    <a href="/vision">
                        VISION
                    </a>
                </li>
                <li>
                    <a href="/history">HISTORY</a>
                </li>
                <li>
                    <a href="/program/school/vision">PROGRAM</a>
                    <ul className="subMenu">
                        <li>
                            <a href="/program/school/vision">스쿨과정</a>
                        </li>
                        <li>
                            <a href="/program/vivaldi">비발디</a>
                        </li>
                        <li>
                            <a href="/program/kgongvi">크공비</a>
                        </li>
                        <li>
                            <a href="/program/silkroad">실크로드</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/recruit">RECRUIT</a>
                </li>
                <li>
                    <a href="/contact">CONTACT</a>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default MenuMobile;
