import React from "react";
import home from ".././stylesheets/home.css";
import web from ".././assets/logo1.svg";
import app from ".././assets/logo2.svg";
import e from ".././assets/logo5.svg";
import fsdesign from "../assets/fs-design.svg";
import webdev from "../assets/web-devlopment-icon.svg";
import digital from "../assets/fs-digital-engi.svg";
import { Link } from "react-router-dom";

export default function Home({darkMode}) {
  document.title = "Barlasify | Home";
  
  const handleClick = (e) => {
    e.target.previousElementSibling.classList.toggle("active");
    e.target.classList.toggle("dull");
  };
  return (
    <div className="homeContainer">
      <div className="bg"></div>
      <div className="homeContent" data-aos="fade-up">
        <div className="homeText">
          <h1 style={{color:!darkMode?'black':'white'}}>
            Transform your brand with
            <span style={{ color: "rgb(8, 175, 115,1)" }}><br/>Revolutionary Digital<br/> Experiences
            </span>
          </h1>
          <p style={{color:!darkMode?'black':'white'}}>Our Mission is to make your business better through technology.</p>
          <Link to="/about"><button className="homeBtn">Learn More</button></Link>
        </div>
      </div>

      <div className="homeContent" data-aos="fade-up">
        <div className="line"></div>
        <div className="homeTechs">
          <h1 style={{color:!darkMode?'black':'white'}}>
            <span style={{ color: "rgb(8, 175, 115,1)" }}>Technology</span> for
            Any part of your Business
          </h1>
          <div className="techs">
            <div className="tech">
              <img src={web} alt="web" />
              <h3 style={{color:!darkMode?'black':'white'}}>Web Development</h3>
            </div>
            <div className="tech">
              <img src={app} alt="app" />
              <h3>App Development</h3>
            </div>
            <div className="tech">
              <img src={digital} alt="ar/vr" />
              <h3 style={{color:!darkMode?'black':'white'}}>Digital Marketing</h3>
            </div>
            <div className="tech">
              <img src={e} alt="ui/ux" />
              <h3 style={{color:!darkMode?'black':'white'}}>Design & UI/UX</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="homeContent" data-aos="fade-up">
        <div className="line"></div>
        <div className="homeExp">
          <h1 style={{color:!darkMode?'black':'white'}}>Our Experience</h1>
          <div className="exps">
            <div className="exp">
              <h1>10+</h1>
              <h3 style={{color:!darkMode?'black':'white'}}>Years Running Strong</h3>
            </div>
            <div className="exp">
              <h1>200+</h1>
              <h3 style={{color:!darkMode?'black':'white'}}>Clients</h3>
            </div>
            <div className="exp">
              <h1>400+</h1>
              <h3 style={{color:!darkMode?'black':'white'}}>Successfull Projects</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="homeContent clientsContent" data-aos="fade-up">

      </div>
      <div className="homeContent" data-aos="fade-up">
        <div className="line"></div>
        <div className="workDetail">
          <h5 style={{color:!darkMode?'black':'white'}}>So what we do exactly?</h5>
          <span style={{color:!darkMode?'black':'white'}}>
            We're a full stack firm that can help you from strategy to launch,
            and anywhere in between.
          </span>
        </div>
        <div className="workContainer">
          <div className="works">
            <div className="work">
              <img src={fsdesign} alt="" />
              <h2 style={{color:!darkMode?'black':'white'}}>Graphic-Design</h2>
              <span style={{color:!darkMode?'black':'white'}}>
                Transform your business with award-winning design for your brand
                identity, website or mobile app.
              </span>
              <div className="dropdown inactive">
                <ul>
                  <li style={{color:!darkMode?'black':'white'}}>Logo Designing</li>
                  <li style={{color:!darkMode?'black':'white'}}>UI/UX Design</li>
                  <li style={{color:!darkMode?'black':'white'}}>Post Design</li>
                </ul>
                <button className="homeBtn">Learn More</button>
              </div>
              <button onClick={handleClick} className="seeMore">
                See more.
              </button>
            </div>
            <div className="work">
              <img src={digital} alt="" />
              <h2 style={{color:!darkMode?'black':'white'}}>Digital Marketing</h2>
              <span style={{color:!darkMode?'black':'white'}}>
                Grow your business with our digital marketing services. We help
                you reach your target audience and increase your sales.
              </span>
              <div className="dropdown inactive">
                <ul>
                  <li style={{color:!darkMode?'black':'white'}}>SEO</li>
                  <li style={{color:!darkMode?'black':'white'}}>SSM</li>
                  <li style={{color:!darkMode?'black':'white'}}>Email Marketing</li>
                </ul>
                <button className="homeBtn">Learn More</button>
              </div>
              <button onClick={handleClick} className="seeMore">
                See more.
              </button>
            </div>
            <div className="work">
              <img src={webdev} alt="" />
              <h2 style={{color:!darkMode?'black':'white'}}>Development</h2>
              <span style={{color:!darkMode?'black':'white'}}>
                Create exceptional web and mobile app experiences with our
                award-winning development team.
              </span>
              <div className="dropdown inactive">
                <ul>
                  <li style={{color:!darkMode?'black':'white'}}>Web Application</li>
                  <li style={{color:!darkMode?'black':'white'}}>App Application</li>
                  <li style={{color:!darkMode?'black':'white'}}>Desktop Application</li>
                </ul>
                <button className="homeBtn">Learn More</button>
              </div>
              <button onClick={handleClick} className="seeMore">
                See more.
              </button>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
