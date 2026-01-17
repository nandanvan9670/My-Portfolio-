 import"../CSS/Navbar.css";
const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const navbarHeight = 15; 
    const y =
      element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <h2 >Nandanvan</h2>
      <ul>
        <li>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection("skills"); }}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
