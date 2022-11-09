import React from 'react'
import ".././stylesheets/projectItem.css";
import web from ".././assets/logo1.svg";
import { useLocation } from 'react-router-dom';
export default function ProjectItem({darkMode}) {
  const loacation=useLocation();
  const {title,details,image}=loacation.state;
  return (
    <div className='projectItemContainer'>
      <div className='projectItem'>
        <img src={image} alt="" />
        <div className='projectItemText'>
          <h3 style={{color: darkMode ? "white" : "black"}}>{title}</h3>
          <p style={{color: darkMode ? "white" : "black"}}>{details}
          </p>
        </div>
      </div>
    </div>
  )
}
