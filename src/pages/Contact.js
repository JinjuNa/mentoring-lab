import React from 'react';
import SubTitle from '../components/SubTitle';
import SubCircle from '../components/SubCircle';

function Contact() {
    const title = "CONTACT";

  return (
    <main>
        <SubTitle title={title} size="f-35"/>
        <div className="contact">
        <div className="contents">
          <div className="icon"></div>
          <div className="txt f-28">궁금한 점은 언제든 연락주세요</div>
          
          <div className="nickName f-18">
            <span className="kinds">
              <p>ADDRESS</p>
              <p>TEL</p>
              <p>E-MAIL</p>
            </span>
            <span className="detail">
              <p>서울 마포구 서교동 395-117 서교리치빌 102</p>
              <p>+82 507-1460-0823</p>
              <p>mentoring_lab@naver.com</p>
            </span>
          </div>

          <div className="sns">
            <div className="sns-ch"><a href="/"></a></div>
            <div className="sns-ch"><a href="/"></a></div>
            <div className="sns-ch"><a href="/"></a></div>
            <div className="sns-ch"><a href="/"></a></div>
          </div>

          <div class="map">
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.174502508647!2d126.9167315150405!3d37.55095227980089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98d081dd788f%3A0x1e1033abdff0efd9!2z7ISc6rWQ66as7LmY67mM!5e0!3m2!1sko!2skr!4v1581467708827!5m2!1sko!2skr" frameborder="0" allowfullscreen=""></iframe>
          </div>

        </div>
        </div>
        <SubCircle />
    </main>
  );
}

export default Contact;
