import React from 'react'
import ".././stylesheets/projects.css";
import Project from './Project';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader';
import { Link } from 'react-router-dom';
export default function Projects({ darkMode }) {
  document.title = "Barlasify | Projects";
  const [loading, setloading] = useState(true)
  const [data, setdata] = useState([])
  useEffect(() => {
    getProjects();
  }, [])
  const getProjects = async () => {
    try {
      const { data: finalData } = await axios.get("/api/v1/projects");
      console.log(finalData)
      setdata(finalData.data)
      setloading(false)
    } catch (error) {
      alert("Something went wrong")
    }
  }
  return (
    <div className="projectContainer">
      <div className="bg"></div>
      <div className="projectContainerContent">
        <div className="line" style={{ marginBottom: "25px" }}></div>
        <div className="homeText">
          <h1 style={{ color: !darkMode ? 'black' : 'white', width: '70%' }}>
            Our beautiful web application built with MERN stack
          </h1>
          <p style={{ color: !darkMode ? 'black' : 'white' }}> We are a team of talented developers making websites</p>
          <button className="homeBtn">Read more about Our Projects below</button>
        </div>
      </div>
      {loading ? <Loader /> :
        <div className="projects">
          {data.map((item)=><Project details={item.details} id={item._id} key={item._id} slug={item.slug} title={item.title} image={item.image} detail={item.description} />)}
        </div>
      }

    </div>

  )
}
