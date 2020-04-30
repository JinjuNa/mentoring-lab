import React from 'react';
import SubTitle from '../components/SubTitle';
import SubCircle from '../components/SubCircle';

function Contact() {
    const title = "CONTACT";

  return (
    <main>
        <SubTitle title={title} />
        <div className="contact">
        <div className="contents">
            contact 내용
        </div>
        </div>
        <SubCircle />
    </main>
  );
}

export default Contact;
