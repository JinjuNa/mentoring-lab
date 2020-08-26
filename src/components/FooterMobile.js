import React from 'react';
import footer_background from "../assets/footer_background.png";
import logo_bottom from "../assets/logo_bottom.svg";

function FooterMobile() {
  return (
    <footer className="footer-mobile">
        <img src={footer_background} alt="footer_background" className="footer-background" />
        <div className="footer-contents">
            <img className="footer-logo" src={logo_bottom} alt="logo_bottom" />
            <p className="copyright">상호 : 멘토링연구소  |  주소 : 경남 밀양시 밀성로4길 9-10, 1층 102호(내이동)  |  사업자등록번호 : 214-97-00875  |  대표자 : 윤성화<br />
            ⓒ 2012 mentoring lab Co., All rights reserved</p>
        </div>
    </footer>
  );
}

export default FooterMobile;
