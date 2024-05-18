import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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

  const projects = [
    {
      img: "https://res.cloudinary.com/dpixrsdwh/image/upload/v1715776790/Beige_New_Product_Mockup_Now_Available_Facebook_Post_vgib70.png",
      title: "AirStay",
      description: "An Airbnb clone that provides a platform for users to list, discover, and book unique accommodations around the world.",
      link: "https://airstay-kybr.onrender.com/"
    },
    {
      img: "https://res.cloudinary.com/dheh8zkmv/image/upload/v1716041395/udtbqkmglvy6rziqxbuc.png",
      title: "Mister Toy",
      description: "Mister Toy is an online toy store built with React, featuring product listings, detailed descriptions, a shopping cart, and secure checkout. It showcases React skills with a focus on component-based architecture and responsive design.",
      link: "https://misertoy2.onrender.com/"
    },
    {
      img: "https://res.cloudinary.com/dpixrsdwh/image/upload/v1715776265/2_zkwie6.png",
      title: "AppSsus",
      description: " Appsus brings your favorite apps together in a single, streamlined application. Utilizing a combination of React, it features a collection of mini-apps including MisterEmail, MissKeep, and MissBooks, each offering unique functionalities within a unified interface.",
      link: "https://lisrael1989.github.io/Apssus_Sprint_3/#/"
    },

    {
      img: "https://res.cloudinary.com/dheh8zkmv/image/upload/v1716041395/hobuahl7aeczk1nssp4d.png",
      title: "Meme Gen",
      description: "A fun and easy-to-use application that allows users to create and share custom memes effortlessly.",
      link: "https://bengold1999.github.io/meme-generator_ben/"
    },
  ];
  const projects_3d = [
    {
      img: "https://res.cloudinary.com/dheh8zkmv/image/upload/v1716047646/bt6wdnyr7kk9ysrcgyeb.png",
      title: "ShowReel",
      description: "",
      link: "https://www.linkedin.com/posts/ben-goldberger-290b8b23a_show-reel-2023-a-little-late-but-heres-activity-7149734857307234304-yjvH?utm_source=share&utm_medium=member_desktop"
    },
    {
      img: "https://res.cloudinary.com/dheh8zkmv/image/upload/v1716047642/g9p0tuwpyuk50qrkvgpg.png",
      title: "Team Five ",
      description: " Contributed by building weapons and creating short videos for the game.",
      link: ""
    },
    {
      img: "https://res.cloudinary.com/dheh8zkmv/image/upload/v1716047645/hvvr3vthel38lh6dshpi.png",
      title: "Frendo",
      description: " A short video created using AI, Unreal Engine, Blender, and Substance Painter, demonstrating advanced 3D modeling and animation techniques. ",
      link: "https://www.youtube.com/watch?v=oHLUbkZRSno&t=160s"
    },

    {
      img: "https://res.cloudinary.com/dheh8zkmv/image/upload/v1716047645/iupgfnp4dgizx9rpcwah.png",
      title: "Reality Reborn",
      description: " A short video created during the Epic Games Bootcamp",
      link: "https://www.youtube.com/watch?v=Zjp4YSgLtTY"
    },
    // {
    //   img: "https://res.cloudinary.com/dheh8zkmv/image/upload/v1716047645/iupgfnp4dgizx9rpcwah.png",
    //   title: "project_cris",
    //   description: "",
    //   link: "https://www.youtube.com/watch?v=Zjp4YSgLtTY"
    // },
    // {
    //   img: "https://res.cloudinary.com/dheh8zkmv/image/upload/v1716047645/iupgfnp4dgizx9rpcwah.png",
    //   title: "env ue",
    //   description: "",
    //   link: "https://www.youtube.com/watch?v=Zjp4YSgLtTY"
    // },
    // {
    //   img: "https://res.cloudinary.com/dheh8zkmv/image/upload/v1716047645/iupgfnp4dgizx9rpcwah.png",
    //   title: "more...",
    //   description: "",
    //   link: "https://www.youtube.com/watch?v=Zjp4YSgLtTY"
    // },
  ];

  return (
    <section className="portfolio">
      <div className='card-container'>
        <h3>Development projects </h3>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div className="card" key={index} onClick={() => window.open(project.link, "_blank")}>
            <div className="box">
              <img src={project.img} alt={project.title} />
              <div className="text">{project.title}</div>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
        
      </Slider>
      </div>
      <div className='card-container'>
      <h3>3D projects
      </h3>
      <Slider {...settings}>
        {projects_3d.map((project, index) => (
          <div className="card" key={index} onClick={() => window.open(project.link, "_blank")}>
            <div className="box">
              <img src={project.img} alt={project.title} />
              <div className="text">{project.title}</div>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
}
