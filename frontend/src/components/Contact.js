import React, { useRef } from 'react'
import ".././stylesheets/contact.css";
import emailjs from '@emailjs/browser';

//Fix this all the data that has to be submited must be under form tag
//Also add styling when the message is succesfull in then function and when the message is failed in the error function
function Contact({ darkMode }) {
  document.title = "Barlasify | Get in touch";
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if (!name || !email || !message) {
      alert("Please fill all the fields");
    } else {
      if (name.length < 3) {
        alert("Name must be atleast 3 characters long");
      }
      else if (email.length < 5) {
        alert("Email must be atleast 5 characters long");
      }
      else if (message.length < 10) {
        alert("Message must be atleast 10 characters long");
      }
      else {
        emailjs.sendForm('service_2x3wq6w', 'template_2x3wq6w', form.current, 'user_2x3wq6w')
          .then((result) => {
            console.log(result.text);
            alert("Message sent succesfully");
          }, (error) => {
            console.log(error.text);
            alert("Message not sent");
          });
      }
      e.target.reset();
    }
  }
  const handleClick = (e) => {
    e.preventDefault();
    let btn = document.querySelectorAll(".btn");
    btn.forEach((btn) => {
      btn.classList.remove("btnActive");
    })
    e.target.classList.add("btnActive");
  }
  return (
    <div className="contactContainer">
      <div className="cover" data-aos="fade-in">
      </div>
      <div className="banner" data-aos="fade-right">
        <h1>We would love to hear from you</h1>
        <span>
          Ready to make your next project a reality? Let's talk about your
          business goals and how we can help you achieve them.
        </span>
      </div>
      <div className="contactForm">
        <div className="serviceType">
          <h1>Services</h1>
          <div className="btnGroup" data-aos="fade-in">
            <button className="btn" onClick={handleClick}>Web Development</button>
            <button className="btn" onClick={handleClick}>App Development</button>
            <button className="btn" onClick={handleClick}>Digital Marketing</button>
            <button className="btn" onClick={handleClick}>Design & UI/UX</button>
            <button className="btn" onClick={handleClick}>Other</button>
          </div>
        </div>
        <form ref={form} className="formGrid" onSubmit={sendEmail}>
          <div className="formGroup">
            <input type="text" name="name" id="name" placeholder='Full Name' style={{ color: !darkMode ? 'black' : 'white' }} />
          </div>
          <div className="formGroup">
            <input type="email" name="email" id="email" placeholder='Email' style={{ color: !darkMode ? 'black' : 'white' }} />
          </div>
          <div className="formGroup">
            <input type="text" name="mobileno" id="number" placeholder='Phone Number' style={{ color: !darkMode ? 'black' : 'white' }} />
          </div>
          <div className="formGroup">
            <input type="text" name="companyname" id="companyname" placeholder='Company Name' style={{ color: !darkMode ? 'black' : 'white' }} />
          </div>
          <div className="formGroup">
            <input type="text" name="website" id="website" placeholder='Website' style={{ color: !darkMode ? 'black' : 'white' }} />
          </div>
          <div className="formGroup">
            <input type="text" name="budget" id="budget" placeholder='Approximate Budget' style={{ color: !darkMode ? 'black' : 'white' }} />
          </div>
          <div className="formGroup">
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Project Summary' style={{ color: !darkMode ? 'black' : 'white' }}></textarea>
          </div>
        </form>
        <span id='msg' style={{ color: !darkMode ? 'black' : 'white' }}>

        </span>
        <div style={{ margin: '50px' }}>
          <button type='submit' className="btn" onClick={sendEmail}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
