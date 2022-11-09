import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="footer-content" data-aos="fade-in">
            <h1>
                Work with us.
            </h1>
            <span>
                Eliminate the hassle of finding the right talent for your project. We have a team of highly skilled developers ready to work on your project.
            </span>
        <div>
        <Link to="/contact" className="contactLink"> <button className="footerBtn">Get in touch</button></Link>
        </div>
        <div className="contact" data-aos="fade-in">
            <div className="footerLine"></div>
            <a href={'mailto:'}><button className="footerBtn">Send us a mail</button></a>
        </div>
        </div>
    </div>
  )
}

export default Footer
