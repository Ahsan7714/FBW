import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../Components/Hero/Hero";
import doc from '../../assets/doc.jpg'
import './Home.css'
import bg from '../../assets/bg-walpaper.jpg'
import Services from "../../Components/Services/Services";
import Reviews from "../../Components/Reviews/Reviews";
import Consultaion from "../../Components/Consulatation/Consultaion";
import Map from "../../Components/Map/Map";
import Newsletter from "../../Components/Newsletter/Newsletter";

const Home = () => {
  return (
    <div> 
      <Hero />
      <img src={bg} alt="" className="home-bg" />
      <div className="home-content">
        <span className="home-img">
          <img src={doc} alt="" />
        </span>
        <div className="home-content-text">
          <h1 className="home-h1">WELCOME TO</h1>
          <h1 className="home-h2">FANTY</h1>
          <h1 className="home-h3">BEAUTY WELLNES</h1>
          <p className="home-p">
            Kierra Ward is a registered nurse from Atlanta, GA. Following in the
            footsteps of her grandmother and mother, Ward’s became a registered
            nurse from a familial calling to servitude. She graduated from
            Florida A&M University and Valdosta State University, earning
            bachelor degrees in health science and nursing, respectively. Her
            breadth of experience includes Intensive Care Unit, telemetry –
            cardiac unit, and diabetes management.
          </p>
          <button className="home-btn"><Link to='/about'>ABOUT US</Link></button>
        </div>
      </div>
      <Services/>
      <Reviews/>
      <Consultaion/>
      <Map/>
      <Newsletter/>
    </div>
  );
};

export default Home;
