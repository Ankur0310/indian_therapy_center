import React from 'react';
import "./Footer.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Footer = () => {
    return (
    <footer className="footer">
      <div className="footer_contact">
        <div className="footer_contact_item">
          <div className="footer_icon"><FaPhoneAlt className="contact-icon" /></div>
          <div>+91 6205363321</div>
        </div>
        <div className="footer_contact_item">
          <div className="footer_icon"><FaMapMarkerAlt className="contact-icon" /></div>
          <div> Saraidhella, Dhanbad, Jharkhand 826003</div>
        </div>
      </div>
      <div className="footer-content">
        <p>&copy; All Rights Reserved. Indian Therapy Center</p>
      </div>
    </footer>
    );
};

export default Footer;