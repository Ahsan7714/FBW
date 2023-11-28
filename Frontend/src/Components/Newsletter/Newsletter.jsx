import React, { useState } from "react";
import './Newsletter.css'

const Newsletter = () => {
    const[email,setEmail] =useState({
        email :''
    })
  return (
    <div className="newsletter">
      <h1>JOIN OUR NEWSLETTER</h1>
      <p>
        Join our email list for new treatment updates, promotions. special
        events + more!
      </p>
      <span className="news-email">
        <label htmlFor="email">Email Address*</label>
        <input type="text"  name="email" id="email" placeholder="Enter Your Email" />
      </span>
      <span className="news-checkbox">
        <input type="checkbox" name="" id="" />
        <label htmlFor="checkbox">
          By sharing my mobile number and email address, I hereby give my
          consent to receive promotional messages and emails from RejuLuxe
          Wellness.
        </label>
      </span>
      <button className="news-sub">Subscribe</button>
    </div>
  );
};

export default Newsletter;
