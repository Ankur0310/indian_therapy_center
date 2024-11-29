import React from 'react';
import "./Services.css";

const Services = () => {
    return (
    <div id="services">
      <section className="services-section">
        <div className="container">
          <div className="row servies_row">
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-icon">
                  <img
                  src="https://res.cloudinary.com/cloud0310/image/upload/v1732658753/physical-therapy_qiokg4.png"
                  alt="Hands reaching"
                  />
                </div>
                <h3 className="service-title">Physiotherapy</h3>
                <p className="service-description">Physiotherapy focuses on restoring movement and function when someone is affected by injury, illness, or disability. </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-icon">
                <img
                  src="https://res.cloudinary.com/cloud0310/image/upload/v1732658752/physiotherapist_elrnkh.png"
                  alt="Hands reaching"
                  />
                </div>
                <h3 className="service-title">Occupational Therapy</h3>
                <p className="service-description">Occupational therapy assists individuals in developing, recovering, or maintaining daily living and work skills.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-icon">
                <img
                  src="https://res.cloudinary.com/cloud0310/image/upload/v1732658760/speech-therapy_j2apis.png"
                  alt="Hands reaching"
                  />
                </div>
                <h3 className="service-title">Speech Therapy</h3>
                <p className="service-description">Speech therapy addresses communication disorders and difficulties with speech, language, and swallowing. </p>
              </div>
            </div>
          </div>
          <div className="row servies_row">
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-icon">
                <img
                  src="https://res.cloudinary.com/cloud0310/image/upload/v1732658752/personality_whzbhn.png"
                  alt="Hands reaching"
                  />
                </div>
                <h3 className="service-title">Behaviour Therapy</h3>
                <p className="service-description">Behaviour therapy focuses on modifying harmful behaviours through various techniques, including reinforcement, punishment, and modeling.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-icon">
                <img
                  src="https://res.cloudinary.com/cloud0310/image/upload/v1732658753/education_o3umsy.png"
                  alt="Hands reaching"
                  />
                </div>
                <h3 className="service-title">Special Education</h3>
                <p className="service-description">Special education provides tailored learning experiences for children with disabilities or special needs. </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-icon">
                <img
                  src="https://res.cloudinary.com/cloud0310/image/upload/v1732658760/mental-health_yv5dyu.png"
                  alt="Hands reaching"
                  />
                </div>
                <h3 className="service-title">Mental Health Counselling</h3>
                <p className="service-description">Counselling offers psychological support to individuals dealing with emotional, psychological, or social challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="thought_section">
      <div className="thought_content"><h2>Your Path to Mental Wellness Starts Here</h2></div>
    </div>
        </div>
    );
};

export default Services;