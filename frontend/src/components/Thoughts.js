import ".././stylesheets/thoughts.css";
import Loader from './Loader.js'
import web from ".././assets/logo1.svg";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios'

export default function Thoughts({ darkMode }) {
  document.title = "Barlasify | Thoughts";
  const [loading, setloading] = useState(true)
  const [data,setdata] = useState([])
  useEffect(() => {
    getThoughts();
  }, [])
  const getThoughts = async () => {
    try {
      const { data:finalData } = await axios.get("/api/v1/blogs");
      setdata(finalData.data) 
      setloading(false)
    } catch (error) {
      //handle error
    }
  }
  return (

    <div className="thoughtsContainer" data-aos="fade-in">
      <div className="bg"></div>
      <div className="homeContent">
        <div className="line" style={{ marginBottom: "25px" }}></div>
        <div className="date">
          <span style={{ color: !darkMode ? 'black' : 'white' }}>September 2022</span>
        </div>
        <div className="homeText">
          <h1 style={{ color: !darkMode ? 'black' : 'white', width: '70%' }}>
            Why Augmented Reality Marketing is the Future?
          </h1>
          <p style={{ color: !darkMode ? 'black' : 'white' }}>How to target the generation that grew up with iPhones.</p>
          <button className="homeBtn">Read More Below</button>
        </div>
      </div>
      {loading?<Loader/>:<div className="thoughts">
        {data.map((item) => {
          return (
            <div key={item._id} className="thought" data-aos="fade-in">
              <img src={item.image} alt="" />
              <h2 style={{ color: !darkMode ? 'black' : 'white' }} className='title'>{item.title}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: '10px' }}>
                <span style={{ color: !darkMode ? 'black' : 'white' }}>{item.slug}</span>
                <span style={{ color: !darkMode ? 'black' : 'white',marginTop:"0.5rem" }} className='date'>{item.date}</span>
                {/* <span style={{ color: !darkMode ? 'black' : 'white', marginLeft: '25px' }} className='date'>{item.readtime}</span> */}
              </div>
              <div className="line" style={{ width: "50px", height: '7px', marginBottom: 20, marginTop: 10 }}></div>
              <Link to={`/thought/${item._id}`} state={{image:item.image,title:item.title,blog:item.blog,author:item.author,date:item.date}}><button className="homeBtn">Read More</button></Link>
            </div>
          )
        })}
      </div>}
      

    </div>
  )
}
