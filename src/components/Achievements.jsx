import { useState } from "react";
import achievementData from "../data/achievementData";
import "../styles/achievements.css";

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { featured, highlights } = achievementData;

  return (
    <>
      <section className="achievements" id="achievements">
        <div className="achievements-container">

          {/* ================= HEADER ================= */}

          <div className="achievements-header">

            <span className="section-tag">
              ACHIEVEMENTS
            </span>

            <h2>
              Achievements & Certifications
            </h2>

            <p>
              A collection of internships, certifications and technical
              achievements that reflect my learning journey, research
              experience and professional growth.
            </p>

          </div>

          {/* ================= FEATURED ================= */}

        <div className="achievement-cards">

  {/* First Card */}

  <div className="achievement-card">

    <img
      src={featured.image}
      alt={featured.title}
      className="achievement-image"
    />

    <div className="achievement-content">

      <h3>{featured.title}</h3>

      <h4>{featured.organization}</h4>

      <span>{featured.duration}</span>

      <p>{featured.description}</p>

      <button
        onClick={() => setSelectedImage(featured.image)}
      >
        View Certificate
      </button>

    </div>

  </div>

  {/* Remaining Cards */}

  {highlights.map((item, index) => (

    <div
      className="achievement-card"
      key={index}
    >

      <img
        src={item.image}
        alt={item.title}
        className="achievement-image"
      />

      <div className="achievement-content">

        <h3>{item.title}</h3>

        <h4>{item.organization}</h4>

        <span>{item.year}</span>

        <p>{item.description}</p>

        <button
          onClick={() => setSelectedImage(item.image)}
        >
          {item.button}
        </button>

      </div>

    </div>

  ))}

</div>

          {/* ================= TIMELINE ================= */}


        </div>
      </section>

      {/* ================= MODAL ================= */}

      {selectedImage && (

        <div
          className="certificate-modal"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="certificate-box"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="Certificate"
            />

          </div>

        </div>

      )}

    </>
  );
};

export default Achievements;