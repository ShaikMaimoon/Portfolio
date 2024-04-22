import React from 'react'
import { FaPython } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
export default function Projects() {
  return (
    <>
    <section className="up-exp">
        <div id="project-div">
            <div className="section-title ">
                <h1 data-aos="fade-up">Projects</h1>
            </div>
            <div id="all-projects">
                
                <div className="project-des"
                data-aos="zoom-out"
                data-aos-duration="1000">
                    <div>
                        <FaPython id="react-icon"></FaPython>
                        <h5>Prediction of Cardiovascular Disease by Using Hybrid model of Machine Learning Algorithms </h5>
                        <p>This model enhances the prediction of cardiovascular illness prediction by 
                            combining different algorithms such as decision tree, random forestand XGboost using ensemble laerning.
                        </p>
                    </div>
                </div>
                <div className="project-des"
                data-aos="zoom-out"
                data-aos-duration="1000">
                    <div>
                        <FaBookAtlas id="react-icon"/>
                        <h5>A simple online book store(Minor-Project)</h5>
                        <p>Created a simple online book store project 
                             with  user authentication, registration, book browsing, and cart management for basic 
                             understanding of the functionalites.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div id="footer-name" className="footer-all">
            <h1>SHAIK MAIMOON</h1>
        </div>
        <div id="footer-icons" className="icons footer-all">
            <div>
                <a href="https://github.com/ShaikMaimoon" target="_blank" rel="noreferrer"><FaGithub/></a>
            </div>
            <div>
                <a href="https://www.instagram.com/_shaikmaimoon/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
            <div>
                <a href="mailto:shaikmaimoon09@gmail.com" target="_blank" rel="noreferrer"><BiLogoGmail /></a>
            </div>
            
        </div>
        <div id="footer-copy" className="footer-all">
            <h1>&copy; All rights reserved Portfolio</h1>
        </div>
    </footer>
    </>
  )
}
