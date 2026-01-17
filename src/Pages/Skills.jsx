import React from 'react'
import "../CSS/Skills.css";

const Skills = () => {
  return (
    <section id='skills' className='skills'>
    <h2>My Skills</h2>

  <div className="skills-container">

    <div className="skill-card">
      <h3>Frontend</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Bootstrap5</li>
        <li>Responsive Design</li>
      </ul>
    </div>

    <div className="skill-card">
      <h3>Backend</h3>
      <ul>
        <li>Core Java</li>
        <li>Advance Java</li>
        <li>Hibarnate</li>
        <li>Spring / Spring Boot</li>
        <li>Node.js</li>
        <li>REST APIs</li>
      </ul>
    </div>

    <div className="skill-card">
      <h3>Database & Tools</h3>
      <ul>
        <li>MySQL</li>
        <li>Git & GitHub</li>
        <li>Postman</li>
        <li>VS Code</li>
        <li>Eclipse</li>
      </ul>
    </div>
    </div>
    </section>
  )
}

export default Skills
