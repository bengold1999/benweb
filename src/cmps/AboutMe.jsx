

import { useEffect, useState } from "react";
import Typed from 'typed.js';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function AboutMe() {


  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  // Custom arrow components
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const imgs_3d = [
    {
      img: "https://res.cloudinary.com/dheh8zkmv/image/upload/v1716396517/gujzrjkrvjdye3zryyyq.webp",
      title: "blender",
    },
    {
      img: "https://res.cloudinary.com/dheh8zkmv/image/upload/v1716396517/mh5uhsn05fgxtakiw3h3.webp",
      title: "Substance painter",
    },
    {
      img: "https://res.cloudinary.com/dheh8zkmv/image/upload/v1716396518/wzwql9l5rnhzcouixfdy.webp",
      title: "Unity & Unreal",
    },

    // {
    //   img: "https://res.cloudinary.com/dheh8zkmv/image/upload/v1716041395/hobuahl7aeczk1nssp4d.png",
    //   title: "CC4 & Iclone8",

    // },
  ];
  const imgs = [
    {
      img: "https://res.cloudinary.com/dheh8zkmv/image/upload/v1716396517/huvxhtamjrgixwhqblwh.webp",
      title: "Angular & Vue & React",
    },
    {
      img: "https://res.cloudinary.com/dheh8zkmv/image/upload/v1716396518/xninixvqkxurmdld1pwl.webp",
      title: "Js & Ts",
    },
    {
      img: "https://res.cloudinary.com/dheh8zkmv/image/upload/v1716396517/dyxnkqdphn8scylgzx4e.webp",
      title: "MongoDB & express",
    },

    {
      img: "https://res.cloudinary.com/dheh8zkmv/image/upload/v1716397906/tzfdxn2h93xq9ux2vbjv.webp",
      title: "css & scss",

    },
  ];

  useEffect(() => {
    const typed = new Typed('.typing-2', {
      strings: [
        'Developer',
        '3D Artist',
        'Coder',
        'Solver',

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
      <section className="App-main-section AboutUs">
        <div className="about-section">
          <h2 className="title-about-me">About Me</h2>
          <div className="about-content">
            <div className="left"></div>
            <div className="right">
              <img className="Ben-img" src="https://res.cloudinary.com/dheh8zkmv/image/upload/v1715859261/WhatsApp_Image_2023-01-06_at_19.51.54_t38zxp.png" alt="Profile Image 626x626" />
              <div className="text">I'm Ben and I'm a</div>
              <div className="text"><span className="typing-2"></span></div>
              <div className="cool-img">
                <section className="card-skill" onClick={handleFlip}>
                  <h3> FullStack Developer skills</h3>
                  <div className={`card ${isFlipped ? 'card-flip is-flipped' : ''}`}>
                    <div className={`card card-front ${isFlipped ? 'dis' : ''}`}>
                      <Slider {...settings}>
                        {imgs.map((project, index) => (
                          <div className="card" key={index}>
                            <div className="box">
                              <img src={project.img} alt={project.title} />
                              <div className="text">{project.title}</div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                    <div className="card card-back">
                      <p className={`${isFlipped ? '':'dis'}`}>My full stack development skills include proficiency in React, Angular, Vue, JavaScript, TypeScript, Node.js, Express, MongoDB, CSS, and SCSS for building dynamic, robust, and responsive web applications.</p>
                    </div>
                  </div>
                </section>
                <section className="card-skill" onClick={handleFlip}>
                  <h3> 3D Art skills</h3>
                  <div className={`card ${isFlipped ? 'card-flip is-flipped' : ''}`}>
                    <div className={`card card-front ${isFlipped ? 'dis' : ''}`}>
                      <Slider {...settings}>
                        {imgs_3d.map((project, index) => (
                          <div className="card" key={index}>
                            <div className={`box`}>
                              <img src={project.img} alt={project.title} />
                              <div className="text">{project.title}</div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                    <div className="card card-back">
                      <p className={`${isFlipped ? '':'dis'}`}>My 3D Art skills include using tools such as Blender, Substance Painter, Unity, and Unreal Engine to create captivating and immersive visuals for games.</p>
                    </div>
                  </div>
                </section>
              </div>
              <div className="text">Why Work With Me</div>
              <p>I excel in communication, bringing both technical expertise and creative vision to every project as a skilled and collaborative teammate.</p>
              <a href="https://drive.google.com/file/d/1Q96uR4HSDWYDioYqlCFvcOUVCUU31Vnt/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

}


