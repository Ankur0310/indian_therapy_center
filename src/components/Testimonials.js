import React, { useState, useEffect } from "react";
import "./Testimonials.css"; 

const Testimonials = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const reviews = [
    {
      name: "Vikas",
      relation:"Student",
      text: "The mental health counseling services have been a lifeline for me. The support and guidance I received helped me through one of the toughest times in my life.",
    },
    {
      name: "Kawar",
      relation:"Shreyas Mother",
      text: "My son was having difficulty with speech, and India Therapy made a huge difference. Their therapists were patient, caring, and professional. Today, my son is communicating confidently.",
    },

    {
      name: "Reeta",
      relation:"Housewife",
      text: "I had a knee replacement surgery and was struggling to regain my mobility. Thanks to the expert care I received at India Therapy, I am now walking without pain and feel stronger every day.",
    },
    // Add more review objects here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) =>
        prevReview === reviews.length - 1 ? 0 : prevReview + 1
      );
    }, 3000); // Change the interval time (in milliseconds) for the carousel effect

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-container"  id="testimonials">
      <div className="testimonial-box">
        <div className="testimonial-carousel">
          <div className="testimonial-slide" key={currentReview}>
            <div className="testimonial-content">
              <div className="testimonial-image"></div>
                <p className="testimonial-text">
                  {reviews[currentReview].text}
                </p>
                <div className="testimonial-author">
                  <h2 className="testimonial-name">
                    {reviews[currentReview].name}
                  </h2>
                  <h4 className="testimonial-relation">
                    {reviews[currentReview].relation}
                  </h4>
                </div>
            </div>
          </div>
          <div className="testimonial-indicators">
            {reviews.map((_, index) => (
              <span
                key={index}
                className={`testimonial-indicator ${
                  index === currentReview ? "active" : ""
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
