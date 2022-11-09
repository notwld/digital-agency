import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import './stylesheets/app.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Thoughts from "./components/Thoughts";
import {useState} from 'react';
import ProjectItem from "./components/ProjectItem";
import ThoughtItem from "./components/ThoughtItem";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration:700, 
  easing: 'ease-in-out',
});

function App() {
  const [darkMode,setdarkMode] = useState(true);
  let body = document.querySelector("body");
  body.style.backgroundColor = darkMode ? "#111111" : "#fff";
  const handleDarkMode = () => {
    setdarkMode(!darkMode);
    if (darkMode) {
      body.classList.add("darkTheme");
    }
    else {
      body.classList.remove("darkTheme");
    }
  };
  return (
    <div className="App">
       <BrowserRouter>
          <Nav  darkMode={darkMode} handleDarkMode={handleDarkMode}/>
          <Routes>
            <Route exact index path="/" element={<Home  darkMode={darkMode} handleDarkMode={handleDarkMode}/>} />
            <Route exact path="thoughts" element={<Thoughts darkMode={darkMode} handleDarkMode={handleDarkMode}/>} />
            <Route exact path="contact" element={<Contact  darkMode={darkMode} handleDarkMode={handleDarkMode}/>} />
            <Route exact path="projects" element={<Projects darkMode={darkMode} handleDarkMode={handleDarkMode}/>} />
            <Route exact path="about" element={<About darkMode={darkMode} handleDarkMode={handleDarkMode}/>} />
            <Route exact path="project/:id" element={<ProjectItem darkMode={darkMode} handleDarkMode={handleDarkMode}/>} />
            <Route exact path="thought/:id" element={<ThoughtItem darkMode={darkMode} handleDarkMode={handleDarkMode}/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
