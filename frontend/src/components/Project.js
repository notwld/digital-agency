import React from 'react'
import { Link } from 'react-router-dom';
import  ".././stylesheets/projects.css";

export default function Project({id,key,title,slug,details}) {
    return (
        <div key={key} className="project" data-aos="fade-in">
            <div className="projectContent">
            <div className="projectText">
                <h1>
                    {/* An Immersive Multi-Brand  AR Experience for the World’s Most Influential Luxury Brands */}
                    {title}
                </h1>
                <span style={{color:'white'}}>
                    {slug}
                </span>
                {/* fix this  */}
                {/* <Link to={`/project/${}`}><button className="projectBtn">Read More</button></Link> */}
                <Link to={`/project/${id}`} state={{title:title,details:details}} className="homeBtn" style={{textDecoration:"none"}}>Read More</Link>
            </div>
            </div>
        </div>
        
    )
}
