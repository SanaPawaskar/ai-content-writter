import React,{ useRef, useEffect } from 'react'
import "./Startpage.css"
import Sky from "./bird.jpg"
import "./Homepage"
import { useNavigate } from 'react-router-dom'
import { gsap } from "gsap"
function Startpage() {
    const navigate=  useNavigate()
   
    const backref = useRef(null)
    useEffect(() => {
    gsap.to(".first",1.5, { delay:.2,   xPercent: -100, ease:"Expo.easeInOut"});
    gsap.to(".second",1.5, { delay:.4,  xPercent: -100, ease:"Expo.easeInOut"});
    gsap.to(".third",1.5, { delay:.6,   xPercent: -100, ease:"Expo.easeInOut"});
  }, [])
  return (
    <div className='Startpage'>
      <div className='overlay first' ref={backref}></div>
      <div className='overlay second' ref={backref}></div>
      <div className='overlay third' ref={backref}></div>
    <div className=''>
        <img className='skydream' src={Sky}/>
    </div>
    <div className='brand-name'>DreamRytrs.AI</div>
    <div className='solgan'>"Constantly Evolving"</div>
   <button className='start-button' onClick={()=>navigate("/home")}>
    Start Thinking Creative
   </button>

    </div>
  )
}

export default Startpage