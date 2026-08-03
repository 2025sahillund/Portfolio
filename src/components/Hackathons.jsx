import { useState } from "react";
import hackathonData from "../data/hackathonData";
import "../styles/hackathons.css";

function Hackathons() {
const [selectedCertificate, setSelectedCertificate] = useState(null);
  return (
    <section id="hackathons" className="hackathon-section">

      <div className="hackathon-header">

        <p>HACKATHON JOURNEY</p>

        <h2>
          Learning Through
          <span> Challenges</span>
        </h2>

      </div>

      {hackathonData.map((item, index) => (
        <div className="hackathon-row" key={index}>

           {item.type === "project" ? (

<div className="project-box">

    <div className="project-icon">
        
    </div>

    <h4>Innova Hackathon </h4>

    <a
        href={item.github}
        target="_blank"
        rel="noreferrer"
        className="project-link"
    >
          GitHub Repository 
    </a>

    <a
        href={item.live}
        target="_blank"
        rel="noreferrer"
        className="project-link"
    >
        Live Demo 
    </a>

</div>

) : (

<div
    className="hackathon-image"
    onClick={() => setSelectedCertificate(item.image)}
>

    <img
        src={item.image}
        alt={item.title}
    />

    <div className="certificate-overlay">
        View Certificate
    </div>

</div>

)}

            <div className="hackathon-content">

            <h3>{item.title}</h3>

            <p className="theme">
                {item.theme}
            </p>

            <h4>
                {item.type === "project"
                    ? "What I Built"
                    : "What I Learned"}
            </h4>

            <ul>
                {item.learned.map((point, i) => (
                <li key={i}>{point}</li>
                ))}
            </ul>

            </div>

        </div>
        ))}

      <div className="future-card">

       More Hackathons In Progress...

      </div>
      {selectedCertificate && (

  <div
    className="certificate-modal"
    onClick={() => setSelectedCertificate(null)}
  >

    <div
      className="certificate-modal-content"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="close-btn"
        onClick={() => setSelectedCertificate(null)}
      >
        ×
      </button>

      <img
        src={selectedCertificate}
        alt="Certificate"
      />

    </div>

  </div>

)}

    </section>
  );
}

export default Hackathons;