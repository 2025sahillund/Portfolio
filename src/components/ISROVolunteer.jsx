import { useState } from "react";
import isroData from "../data/isroData";
import "../styles/isro.css";

function ISROVolunteer() {
  const [showID, setShowID] = useState(false);

  return (
    <>
      <section id="isro" className="isro-section">

        <div className="isro-header">

          <p>FEATURED EXPERIENCE</p>

          <h2>{isroData.title}</h2>

          <span>{isroData.subtitle}</span>

        </div>

        <div className="isro-container">

          {/* LEFT */}

          <div className="isro-left">

            <div
              className="isro-id-card"
              onClick={() => setShowID(true)}
            >

              <img
                src={isroData.image}
                alt="ISRO Volunteer ID"
              />

              <div className="id-overlay">
                Click to View
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="isro-right">

            <div className="isro-about">

              <h3>About the Program</h3>

              {isroData.about.map((item, index) => (

                <p key={index}>
                  {item}
                </p>

              ))}

            </div>

            <div className="isro-work">

              <h3>My Contributions</h3>

              <ul>

                {isroData.contributions.map((item, index) => (

                  <li key={index}>
                    {item}
                  </li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* ================= MODAL ================= */}

      {showID && (

        <div
          className="image-modal"
          onClick={() => setShowID(false)}
        >

          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setShowID(false)}
            >
              ×
            </button>

            <img
              src={isroData.image}
              alt="ISRO Volunteer ID"
            />

          </div>

        </div>

      )}
    </>
  );
}

export default ISROVolunteer;