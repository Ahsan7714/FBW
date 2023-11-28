import React from "react";
import { Link } from "react-router-dom";
import botox from '../../assets/botox.jpg'
import weight from '../../assets/weight.jpg'
import lip from '../../assets/lip.jpg'
import kybella from '../../assets/kybella.jpg'

import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <span className="service-head">
        <h1 className="services-h1">SERVICES</h1>
        <div className="service-line"></div>
      </span>
      <div className="services-content">
        <Link to="/">
          <span className="services-box">
            <img src={botox} alt="" />
            <p>BOTOX</p>
          </span>
        </Link>
        <Link to="/">
          <span className="services-box">
            <img src={weight} alt="" />
            <p>WEIGHT LOSS</p>
          </span>
        </Link>{" "}
        <Link to="/">
          <span className="services-box">
            <img src={lip} alt="" />
            <p>LIP FILLER</p>
          </span>
        </Link>
        <Link to="/">
          <span className="services-box">
            <img src={kybella} alt="" />
            <p>KYBELLA</p>
          </span>
        </Link>
      </div>
      <span className="resources"><button className="services-rbtn"><Link>VIEW ALL SERVICES</Link></button></span> 
     </div>
  );
};

export default Services;
