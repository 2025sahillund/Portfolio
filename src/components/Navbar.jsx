import "../styles/navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-logo">
        <h2>Sahil Lund</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#journey">Journey</a></li>
        <li><a href="#internship">Internship</a></li>
        <li><a href="#isro">ISRO Event</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#hackathons">Hackathons</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-right">

        <a
          href="https://github.com/2025sahillund"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/sahil-lund-7b18a1289/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="/assets/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          Resume
        </a>

      </div>

    </nav>
  );
}

export default Navbar;