import React from 'react'
import './Resume.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const Resume = () => {
    useGSAP(() => {
        // Animate the section headers
        gsap.from(".resume-title-box", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger:1,
            scrollTrigger: {
                trigger: ".resume-title-box",
                scroll:"body",
                scrub:2,           
                start:"top 80%",
                end:"top 30%",
            }
        });
    
        // Animate the individual cards with a stagger
        gsap.from(".experience-card", {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".experience-grid",
                scroll:"body",
                scrub:2,           
                start:"top 80%",
                end:"top 30%",
            
            }
        });
    });

    return (
        <section className="resume-section" id="resume">
            <div className="container">
                {/* The "Big Background Text" Header */}
                <div className="resume-title-box">
                    <h1 className="bg-title">Resume</h1>
                    <p className="subtitle">
                        AWS DevOps Engineer specializing in Python-driven automation and containerization to deliver scalable, secure cloud infrastructure.
                    </p>
                </div>

                <div className="experience-header">
                    <h2>Experience</h2>
                    <div className="underline">
                        <div className="blue-line"></div>
                    </div>
                </div>

                <div className="experience-grid">
                    <div className="experience-card">
                        <span className="date">2021-2025</span>
                        <h3>Software Engineer</h3>
                        <span className="company">HCL Technologies</span>
                        <ul className="details">
                            <li>Built and managed production-ready cloud environments using Terraform to provision VPCs, EC2, and S3 buckets.</li>
                            <li>Automated AWS resource management by writing Python (Boto3) scripts and Git-based CI/CD pipelines to replace manual workflows.</li>
                            <li>Engineered automated SSL/TLS certificate lifecycles</li>
                            <li>Performed 42Crunch API security scans to remediate vulnerabilities.</li>
                            <li>Deployed containerized applications using Docker and EKS</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Resume