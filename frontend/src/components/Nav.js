import React,{useEffect,useState} from "react";
import nav from ".././stylesheets/nav.css";
import { Link, Outlet } from "react-router-dom";

export default function Nav({darkMode,handleDarkMode}) {
  const [navbar,setNavbar] = useState(false);
  const [title,setTitle] = useState(document.title.split("|")[1]);

  //auto change title
  useEffect(()=>{
   document.title = `Barlasify | ${title}`;
  });
  
  
  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  const handleMenu = (e) => {
    let menuLinks = document.querySelector(".menuLinks");
    menuLinks.classList.toggle("active-links");
  };
  return (
    <div>
      <div className="menu-section">
        <div className="menu-icon" onClick={handleMenu}>
          <img src={require('../assets/menu.png')} alt=""   width={25} height={25} style={{filter:darkMode?'invert(100%)':'invert(0%)'}} />
        </div>
        
        <div className="menuLinks">
          <div className="close" onClick={handleMenu}>
            <img src={require('../assets/close.png')} alt=""   width={25} height={25} style={{filter:'invert(100%)'}} />
          </div>
          <div className="dark-icon" onClick={handleDarkMode}>
        <img src={darkMode?require('../assets/moon.png'):require('../assets/sun.png')} width={25} height={25}/>
        </div>
        <ul className="menu-links">
          <li className="reslinks">
            <Link  to="/">Home</Link>
          </li>
          <li className="reslinks">
            <Link  to="/about">About</Link>
          </li>
          <li className="reslinks">
            <Link  to="/thoughts">Thoughts</Link>
          </li>
          <li className="reslinks">
            <Link  to="/projects">Projects</Link>
          </li> 
          <li className="reslinks">
            <Link  to="/contact">Get in touch</Link>
          </li>
          
        </ul>
        <Outlet />
        </div>
      </div>
      <nav className={navbar ? "dark" : "navbar"} style={{borderColor:darkMode?"white":"black",backgroundColor:darkMode?null:'transparent'}}>
        <div className="logo-section" data-aos="fade-in">
          <Link to="/"><img src="" alt="logo" className="logo" /></Link>
          <span><Link to='/' style={{textDecoration:'none',color:!darkMode?'black':'white'}}>Company Name</Link></span>
        </div>
        <ul className="nav-links" data-aos="fade-in">
          <li className="links">
          <Link  to="/about" style={{color:!darkMode?'black':'white'}}>About</Link>
          </li>
          <li className="links">
          <Link  to="/thoughts" style={{color:!darkMode?'black':'white'}}>Thoughts</Link>

          </li>
          <li className="links">
          <Link  to="/projects" style={{color:!darkMode?'black':'white'}}>Projects</Link>
          </li>
          <li className="links">
            <Link  to="/contact" style={{color:!darkMode?'black':'white'}}><button className="nav-btn">Get in touch</button></Link>

          </li>
          <li className="links darkMode" onClick={handleDarkMode}>
            <img src={darkMode?require('../assets/moon.png'):require('../assets/sun.png')} width={25} height={25}/>
          </li>
        </ul>
      </nav>
      <div className="vertical-nav" style={{borderColor:darkMode?"white":"black"}}>
        <div className="nav-items" style={{borderColor:darkMode?"white":"black"}}>
            <span style={{color:!darkMode?'black':'white'}}>Creative <br/>Technology</span>
        </div>
        <div className="nav-items">
            <span style={{color:!darkMode?'black':'white'}}>Order Now</span>
        </div>
      </div>
    
    </div>
  );
}
