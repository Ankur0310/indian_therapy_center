import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Reach Us Soon! </h2>
      <div className="contact-content">
        <div className="map-container">
          <iframe
            title="Google Map Location"
            className="google_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4486.824170452818!2d86.45098437611793!3d23.808009378631088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd0060858533%3A0x13be53ad97d94375!2sIndia%20Therapy%20Centre!5e1!3m2!1sen!2sin!4v1732652786535!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;
