

import { useEffect } from "react";
import Typed from 'typed.js';

export function AboutMe() {

  useEffect(() => {
    const typed = new Typed('.typing-2', {
      strings: [
        'Fullstack Developer',
        '3D Artist',
        'Passionate Coder',
        'Problem Solver',

      ],
      typeSpeed: 100,
      backSpeed: 60,
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
          <h2 className="title-about-me">About Me</h2>

          <div className="about-content ">
            <div className="left ">
              <img className="Ben-img" src="https://res.cloudinary.com/dheh8zkmv/image/upload/v1715859261/WhatsApp_Image_2023-01-06_at_19.51.54_t38zxp.png" alt="Profile Image 626x626" />
            </div>
            <div className="right">
              <div className="text">I'm Ben and I'm a <span className="typing-2"></span></div>
              <p>Hi, I'm Ben. I am a full stack developer and a 3D generalist, skilled in frameworks like React, Angular, and Vue, and proficient in JavaScript, TypeScript, and CSS/SCSS. In the 3D realm, I work with tools like Blender, Substance Painter, CC4, and iClone8, and have experience with game engines like Unreal Engine and Unity. Passionate about web development and digital art, I strive to blend technical expertise with creative vision. I continuously seek opportunities to innovate and collaborate, bringing extraordinary projects to life in both digital and artistic spheres. Let's connect!.</p>

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


