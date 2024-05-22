

import { useEffect } from "react";
import Typed from 'typed.js';

export function AboutMe() {

  useEffect(() => {
    const typed = new Typed('.typing-2', {
      strings: [
        'Developer',
        '3D Artist',
        'Passionate Coder',
        'Problem Solver',

      ],
      typeSpeed: 150,
      backSpeed: 100,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App aboutUs" id="AboutUs">
      <section className="App-main-section AboutUs  ">
        <div className="about-section">
          <h2 className="title-about-me ">About Me</h2>

          <div className="about-content ">
            <div className="left ">
              <img className="Ben-img" src="https://res.cloudinary.com/dheh8zkmv/image/upload/v1715859261/WhatsApp_Image_2023-01-06_at_19.51.54_t38zxp.png" alt="Profile Image 626x626" />
            </div>
            <div className="right">
              <div className="text">I'm Ben and I'm a </div>
              <div className="text"><span className="typing-2"></span></div>
              <p>Hi, I'm Ben. I'm a full stack developer and 3D generalist, skilled in React, Angular, Vue, JavaScript, TypeScript, CSS/SCSS, Blender, and Unreal Engine. I blend technical expertise with creative vision in web development and digital art.</p>

              <div className="text">Why Work With Me</div>
              <p>I'm a great communicator who takes the time to fully understand and address customer problems. As a skilled and collaborative teammate, I bring both technical expertise and creative vision to every project.</p>

              <a href="https://drive.google.com/file/d/1Q96uR4HSDWYDioYqlCFvcOUVCUU31Vnt/view?usp=sharing" target="blank">Download CV</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


