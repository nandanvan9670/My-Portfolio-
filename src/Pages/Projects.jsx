import React from 'react'
import "../CSS/Project.css";
const Projects = () => {
  return (
    <section id='projects' className='projects'>
     <h2>My Projects</h2>
  <div className="projects-container">

    {/* PROJECT 1 */}
    <div className="project-card">
      <h3>CRM Management System</h3>

      <p className="project-desc">
        A Customer Relationship Management (CRM) web application used to manage
        customers, leads, and business interactions. Includes CRUD operations,
        secure APIs, and an intuitive user interface.
      </p>

      <div className="project-tech">
        <span>React</span>
        <span>Java</span>
        <span>Spring Boot</span>
        <span>REST API</span>
        <span>MySQL</span>
      </div>

      <div className="project-buttons">
        <a href="#" className="btn primary-btn">View Demo</a>
        <a href="https://github.com/nandanvan9670" className="btn secondary-btn">Source Code</a>
      </div>
    </div>

    {/* PROJECT 2 */}
    <div className="project-card">
      <h3>Restaurant Management System</h3>

      <p className="project-desc">
        A responsive frontend web application designed for managing restaurant
        operations such as menu display, orders, and customer interaction.
        Focused on clean UI, responsiveness, and user experience.
      </p>

      <div className="project-tech">
        <span>HTML5</span>
        <span>CSS3</span>
        <span>JavaScript</span>
        <span>Responsive UI</span>
      </div>

      <div className="project-buttons">
        <a href="https://nandanvanrestaurant.netlify.app/" className="btn primary-btn">View Demo</a>
        <a href="https://github.com/nandanvan9670" className="btn secondary-btn">Source Code</a>
      </div>
    </div>

  </div>
</section>

  )
}

export default Projects
