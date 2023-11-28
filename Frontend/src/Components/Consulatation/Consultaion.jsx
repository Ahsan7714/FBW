import React from 'react'
import bg from '../../assets/bg-walpaper.jpg'
import { Link } from "react-router-dom";
import './Consultation.css'
import doc from '../../assets/doc.jpg'


const Consultaion = () => {
  return (
    <div>
      <img src={bg} alt="" className="bg-walpaper"/>
      <div className="consultation">
        <div className="consultation-content">
          <div className="consultation-left">
            <p>ARE YOU READY TO SCHEDULE YOUR FREE CONSULTATION?</p>
            <h1>XXX·XXX·XXXX</h1>
            <button><Link>BOOK NOW</Link></button>
          </div>
          <div className="consultation-right">
            <img src={doc} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consultaion