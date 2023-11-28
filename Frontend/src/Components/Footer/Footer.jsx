import React from "react";
import logo from "../../assets/logo1.png";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-a">
          <p>
            Fanty Beauty Wellness is a Wellness & Aesthetic Spa that focuses on
            inner health and beauty. We help optimize health and enhance beauty
            while rejuvenating In lap of luxury.
          </p>
          <p>
            I want you to feel your most luxurious self by rejuvenating from the
            inside out.
          </p>
          <span > 
            <p className="footer-pr cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Terms of Use</p>
          </span>
        </div>
        <div className="footer-b">
          <img src={logo} alt="" />
        </div>
        <div className="footer-c">
          <p>XXX-XXX-XXXX</p>
          <p>contact@fbwgmail.com</p>
          <p>4927 Jonesboro Rd , Suite B Forest Park , GA 30297</p>
        </div>
      </div>
      <div className="footer-bootom">
        <p>© 2023 Fanty Beauty Wellness</p>
        <p> | All rights reserved .</p>
      </div>
    </div>
  );
};

export default Footer;
