import React from 'react'
import video from '../../assets/bg-video.mp4'
import './Hero.css'
import logo from '../../assets/fbw-logo.png'


const Hero = () => {
  return (
    <div className='hero'>
    <div className="video_overlay">
   <video autoPlay muted loop id="myVideo">
     <source src={video} type="video/mp4" />
           </video>
 </div>
   <div className="hero_content">
    <div className='hero_logo'>
      <img src={logo} alt="" />
      <button className='h-[50px] w-90 px-20 bg-[#b44c9bff] font-semibold text-white rounded-lg hover:bg-[#c9a453]'>BOOK NOW</button>
    </div>
       </div>
</div>
  )
}

export default Hero