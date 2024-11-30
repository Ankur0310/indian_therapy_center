import React from 'react';
import "./About.css";
import CirclePattern2 from "./CirclePattern2";

const About = () => {
    return (
    <div className="about_container" id="about">
      <div className="about_content">
        <div className="about_left">
          <div className="about_shape_structure">
            <div className="ll_about">
              <div className="smSquare a00"></div>
              <div className="smSquare a10">
              <div className="shape_circles">
                  <CirclePattern2/>
               </div>
              </div>
            </div>
            <div className="rr_about">
              <div className="smSquare a01">
                <div className="about_logo">
                  <img
                    src="https://res.cloudinary.com/cloud0310/image/upload/v1732657163/www.indiatherapycentre.com_20241124_143257_0000_b9wn6a.png"
                    alt="Logo"
                  />
                </div>
              </div>
              <div className="smSquare a11">
                <div className="builing_img">
                  <img
                    src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTUzNXwwfDF8c2VhcmNofDN8fCUyMlRoZXJhcHklMjJ8ZW58MHx8fHwxNzMxOTQxODk4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Hands reaching"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_right">
          <div className="about_heading"><h1 className="about_H">About Indian Therapy Center</h1></div>
          <div className="about_subtitle">
          <p>
            At Indian Therapy Center, we are dedicated to being more than just a
            psychotherapy facility — we are your compassionate allies in the journey
            towards mental health. Our experienced therapists understand the
            complexities of the human mind and are committed to providing
            exceptional care tailored to your individual needs.
          </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default About;