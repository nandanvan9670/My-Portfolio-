import "../CSS/Home.css";
const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span>Nandanvan</span> 👋
        </h1>

        <h2>Frontend / Java Full Stack Developer</h2>

        <p className="home-summary">
            I am a passionate developer focused on building responsive, scalable,
          and user-friendly web applications using React, JavaScript, java, SpringBoot and modern
          web technologies.

       </p>

         <div className="home-buttons">
          <a
            href="/NANDANVAN-CV.pdf"
            download
            className="btn primary-btn"
          >
            Download CV
          </a>

          <a href="#projects" className="btn secondary-btn">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
