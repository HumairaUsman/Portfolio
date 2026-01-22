import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import aws from "../../assets/aws.png"
import python from "../../assets/python.jpg"
import genai from "../../assets/genai.jpeg"
import container from "../../assets/container.jpg"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function About() {
  useGSAP(()=>{
    gsap.from(".circle",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
     
        start:"top 60%",
        end:"top 30%",

      }
    })
      gsap.from(".line",{
        x:-100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
          trigger:".line",
          scroll:"body",
          scrub:2,
         
          start:"top 60%",
          end:"top 30%"
  
        } 
    })
    gsap.from(".aboutdetails h1",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails h1",
        scroll:"body",
        scrub:2,
  
        start:"top 60%",
        end:"top 30%"

      }
  
  })
  gsap.from(".aboutdetails ul",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".aboutdetails ul",
      scroll:"body",
      scrub:2,
  
      start:"top 60%",
      end:"top 30%"

    }

})
gsap.from(".rightabout",{
  x:100,
  duration:1,
  opacity:0,
  stagger:1,
  scrollTrigger:{
    trigger:".rightabout",
    scroll:"body",
    scrub:2,
  
    start:"top 60%",
    end:"top 30%"

  }

})
})
  return (
    <div id="about">
<div className="leftabout">
<div className="circle-line">
  <div className="circle"></div>
  <div className="line"></div>
  <div className="circle"></div>
  <div className="line"></div>
  <div className="circle"></div>
</div>
<div className="aboutdetails">
  <div className="personalinfo">
    <h1>Personal Info</h1>
    <ul>
      <li>
<span>NAME</span> : HUMAIRA USMAN
      </li>
      <li>
<span>AGE</span> : 26 YEARS
      </li>
      <li>
<span>GENDER</span> : FEMALE
      </li>
      <li>
<span>LANGUAGE KNOWN</span> : HINDI, ENGLISH
      </li>
    </ul>
  </div>
  <div className="education">
    <h1>Education</h1>
    <ul>
      <li>
<span>DEGREE</span> : B-TECH
      </li>
      <li>
<span>BRANCH</span> : ELECTRONICS & COMMUNICATION ENGINEERING
      </li>
      <li>
<span>CGPA</span> : 8.96
      </li>
    </ul>
  </div>
  <div className="skills">
    <h1>Skills</h1>
    <ul>
      <li>
PYTHON
      </li>
      <li>
AWS
      </li>
      <li>
Docker
      </li>
      <li>
KUBERNETES
      </li>
      <li>
TERRAFORM
      </li>
      <li>
SQL
      </li>
      <li>
JENKINS
      </li>
      <li>
GIT
      </li>
      <li>
GENAI
      </li>
    </ul>
  </div>
</div>
</div>
<div className="rightabout">
<Card title="AWS" image={aws}/>
<Card title="PYTHON" image={python}/>
<Card title="CONTAINERIZATION" image={container}/>
<Card title="GENAI" image={genai}/>
</div>
    </div>
  )
}

export default About
