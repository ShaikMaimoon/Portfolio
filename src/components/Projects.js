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
                        {/* <FaPython id="react-icon"></FaPython> */}
                        <a href="https://drive.google.com/file/d/1Fj_cg2_IhBVj9Y-gL8eeP9luNJoDIQqL/view?usp=sharing" target="_blank" rel="noreferrer"><FaPython id="react-icon"/></a>
                        <h5>Prediction of Cardiovascular Disease by Using Hybrid model of Machine Learning Algorithms </h5>
                        <p>o Utilizing a hybrid Model of Machine Learning algorithms enhances cardiovascular illness prediction 
                            by combining different algorithms, using its ensemble learning for improved accuracy.<br />
                            o Compared different machine learning techniques like Decision Tree, Random Forest, XGboost
                             to assess their effectiveness in heart disease prediction.<br />
                            o This innovative approach combines models, resulting in a more accurate and efficient
                             predictive system and also optimizes the errors.

                        </p>
                    </div>
                </div>
                <div className="project-des"
                data-aos="zoom-out"
                data-aos-duration="1000">
                    <div>
                        {/* <FaBookAtlas id="react-icon"/> */}
                        <a href="https://shaikmaimoon.github.io/my-new-app/" target="_blank" rel="noreferrer"><FaBookAtlas id="react-icon"/></a>
                        <h5>Portfolio</h5>
                        <p>o Developed a visually appealing portfolio featuring a showcase of projects, skills, and work, 
                            utilizing creative design and animations to enhance user engagement.<br></br>o Demonstrated proficiency in web development, design, 
                            and deployment by creating an interactive and polished online presence through the portfolio.
                            <br />
                            o Successfully hosted the portfolio on GitHub Pages, ensuring accessibility and easy sharing for potential employers and collaborators.
                        </p>
                    </div>
                </div>
                <div className="project-des"
                data-aos="zoom-out"
                data-aos-duration="1000">
                    <div>
                        {/* <FaPython id="react-icon"></FaPython> */}
                        <a href="https://hrlabs.in/" target="_blank" rel="noreferrer"><FaBookAtlas id="react-icon"/></a>
                        <h5>HRlabspage </h5>
                        <p>o Enhance user experience and navigation for improved usability, ensure full responsiveness across all devices.<br></br>
                            o As a Developer at hrlabs, I played a key role in the development of  HRlabs website. 
                            Leveraging my expertise in React.js, HTML, and CSS, I collaborated with the design team 
                            to implement a user-friendly and 
                            visually appealing website for HR Labs, a human resource consulting firm.<br></br>
                            o Successfully launched the hrlabs.in website, contributing to the company's online presence and 
                            brand awareness in the HR consulting industry.

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
