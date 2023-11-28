import React, { useState } from "react";
import "./Map.css";

const Map = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="map">
      <div className="left-map">
        <div>
          <iframe
            width="100%"
            height="650"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=4927%20Jonesboro%20Rd%20Suite%20B%20Forest%20Park%C2%A0GA%C2%A030297+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">
              Calculate population in area
            </a>
          </iframe>
        </div>
      </div>
      <div className="right-map">
        <h1>GET IN TOUCH</h1>
        <p>
          Fill out the form below and we will cantact you as soon as possible
        </p>
        <form onSubmit={submit}>
          <div className="form">
            <input
              type="text"
              placeholder="Enter First Name"
              id="first_name"
              name="first_name"
              value={state.name}
              onChange={inputHandle}
              required
            />
            <input
              type="text"
              placeholder="Enter Last Name"
              id="last_name"
              value={state.name}
              name="last_name"
              onChange={inputHandle}
              required
            />
            <input
              type="text"
              placeholder="Enter Email"
              id="email"
              value={state.name}
              name="email"
              onChange={inputHandle}
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="3"
              placeholder="Write Message"
              value={state.name}
              onChange={inputHandle}
            ></textarea>
          </div>
          <div className="form-checkbox">
          <p>What are you interested in?</p>
            <span>
              <input type="checkbox" />
              <label htmlFor="">Weight Loss</label>
            </span>
            <span>
              <input type="checkbox" />
              <label htmlFor="">Botox</label>
            </span>{" "}
            <span>
              <input type="checkbox" />
              <label htmlFor="">Lip Filler</label>
            </span>
            <span>
              <input type="checkbox" />
              <label htmlFor="">KyBellas</label>
            </span>
          </div>
          <button className="form-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Map;
