// src/components/HeroSection.jsx
import React from "react";
import "./Hero.css";
import CirclePattern from "./CirclePattern";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-box">
          <div className="content-circles">
            <CirclePattern/>
          </div>
          <div className="hero-content">
             <div className="hero_content_box">
                <h1 className="hero-title">
                  Transform Your Mind and Life at Indian Therapy Center
                </h1>
                <p className="hero-subtitle">
                  Welcome to Indian Therapy Center, your sanctuary for mental wellness.
                  We offer a range of therapeutic services designed to help you find
                  peace and balance, whether you're seeking support for anxiety,
                  depression, or personal growth.
                </p>
                <div className="hero-buttons">
                  <div className="hero-buttons_inner">  
                    <div className="hero-buttons_inner2">
                     <div  className="hero_btn btn-primary">
                      <div className="link_wrapper"><a className="link" href="#about">About us</a></div>
                     </div>
                      <div className="hero_btn btn-secondary">
                        <div className="link_wrapper" ><a className="link" href="#services">Services</a></div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
      </div>

      <div className="hero-visual">

        <div className="color-palette">
          <div className="color-dot color-orange"></div>
          <div className="color-dot color-yellow"></div>
          <div className="color-dot color-gray"></div>
          <div className="color-dot color-black"></div>
        </div>

        <div className="left_design">
            <div className="square shape_00">
              <div className="mini_square_0"></div>
              <div className="mini_square_1"></div>
            </div>
            <div className="square shape_10">
            </div>
            <div className="shape_circles">
                  <CirclePattern/>
            </div>
            <div className="square shape_20">
            </div>
            <div className="square shape_30">
              <div className="builing_img">
              <img
                src="https://res.cloudinary.com/cloud0310/image/upload/v1732740087/pexels-jonathanborba-19641816_fwbivw.jpg"
                alt="Hands reaching"
              />
              </div>
            </div>
        </div>
        <div className="right_design">
            <div className="shape_01">
              <div className="hands_img">
                <img 
                  src="https://res.cloudinary.com/cloud0310/image/upload/v1732739969/pexels-anete-lusina-5240697_lrhc4x.jpg"
                  alt="Hands reaching"
                  />
              </div>
            </div>
            <div className="square shape_21">
              <div className="c1 circle">
                <div className="c2 circle">
                  <div className="c3 circle">
                      <div className="c4 circle"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="square shape_31">
                <div className="square mini_31">
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
