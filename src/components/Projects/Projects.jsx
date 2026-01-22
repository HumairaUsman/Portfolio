import React from 'react'
import Card from '../Card/Card'
import yts3 from "../../assets/yt-to-s3.png"
import "./Projects.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Projects() {
useGSAP(()=>{
  gsap.from("#para",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:"#para",
      scroll:"body",
      scrub:2,
   
      start:"top 80%",
      end:"top 30%",

    }
  })
  gsap.from(".slider",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".slider",
      scroll:"body",
      scrub:2,
   
      start:"top 80%",
      end:"top 30%",

    }
  })
   
})
  return (
    <div id="projects">

        <h1 id="para">Passionate Learner & Project Builder</h1>  
  <div className="slider">
<Card title="YouTube to S3 Audio Transproter" image={yts3} link="https://github.com/HumairaUsman/AWS/tree/main/YT-to-S3_Audio_Transporter"/>
  </div>
    </div>
  )
}

export default Projects
