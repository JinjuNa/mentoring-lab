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
