import React from 'react'
import ".././stylesheets/thoughtItem.css";
import web from ".././assets/logo1.svg";
import { useLocation } from 'react-router-dom'
export default function ThoughtItem({darkMode}) {
  const loacation=useLocation()
  return (
    <div className='thoughtItemContainer'>
      <div className='thoughtItem'>
        <img src={loacation.state.image} alt="" />
        <div className='thoughtItemText'>
          <h3 style={{color: darkMode ? "white" : "black"}}>Title: {loacation.state.title}</h3>
          <div className="author">
            <h3 style={{color: darkMode ? "white" : "black"}}>Author: {loacation.state.author}</h3>
            <h3 style={{color: darkMode ? "white" : "black"}}>Date: {loacation.state.date.substr(0,10)}</h3>
          </div>
          <p style={{color: darkMode ? "white" : "black"}}>
            {loacation.state.blog}
          </p>
        </div>
      </div>
    </div>
  )
}
