import React from 'react'
import "../CSS/About.css";
const About = () => {
  return (
     <section id='about' className='about'>
    <div>
      <h2>About Me</h2>
      <p>
  I am a passionate and motivated Full Stack Developer with a strong foundation
    in frontend and backend technologies. I enjoy building responsive,
    user-friendly web applications using React, JavaScript, HTML, and CSS on the
    frontend, along with Java and Spring Boot on the backend. As a fresher, I am
    eager to learn, grow, and contribute to real-world projects.
      </p>

     <h2>Education</h2>

  <div className="education-container">
    <div className="education-card">
      <h3>Bachelor of Computer Science (BCS)</h3>
      <p className="college">Dadapatil Rajale Arts and Science College, Adinathnagar</p>
      <p className="university">Savitribai Phune Pune University </p>
      <p className="year">2022 – 2025</p>
    </div>

    <div className="education-card">
      <h3>Higher Secondary Education (12th / HSC)</h3>
      <p className="college">Chhatrapati Shri Shivaji Maharaj Highschool and Junior College, Miri</p>
      <p className="year">2021 – 2022</p>
    </div>

    <div className="education-card">
      <h3>Secondary School Certificate (10th / SSC)</h3>
      <p className="college">Yashwant Vidyalay, Shiral</p>
      <p className="year">2019 – 2020</p>
    </div>

  </div>
    </div>
    </section>
  )
}

export default About
