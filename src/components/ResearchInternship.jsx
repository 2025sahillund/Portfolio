import { useState } from "react";
import researchData from "../data/researchData";
import "../styles/researchInternship.css";

const Internship = () => {
  const [selectedImage, setSelectedImage] = useState(null);
const [currentIndex, setCurrentIndex] = useState(0);
const [selectedDocument, setSelectedDocument] = useState(null);

  const openImage = (index) => {
    setCurrentIndex(index);
    setSelectedImage(researchData.gallery[index]);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const next =
      (currentIndex + 1) % researchData.gallery.length;

    setCurrentIndex(next);
    setSelectedImage(researchData.gallery[next]);
  };

  const previousImage = () => {
    const prev =
      (currentIndex - 1 + researchData.gallery.length) %
      researchData.gallery.length;

    setCurrentIndex(prev);
    setSelectedImage(researchData.gallery[prev]);
  };

  return (
    <>
      <section
        className="research-section"
        id="internship"
      >
        <div className="container">

          {/* ================= HEADER ================= */}

          <div className="research-header">

            <span className="section-tag">
              INTERNSHIP
            </span>

            <h2>{researchData.role}</h2>

            <h3>{researchData.company}</h3>

            <p>{researchData.duration}</p>

          </div>
        <div className="about-card">

                <h3>About the Internship</h3>

                {researchData.about.map((item, index) => (

                <p key={index}>
                    {item}
                </p>

                ))}

            </div>
          {/* =============== MAIN GRID =============== */}

          <div className="research-layout">

            {/* ---------- LEFT IMAGES ---------- */}

            <div className="image-column left-column">
            {researchData.gallery.slice(0, 3).map((item, index) => (

            <div
                key={index}
                className="thumbnail-card"
                onClick={() => openImage(index)}
            >

                <div className="thumbnail-image">

                <img
                    src={item.image}
                    alt={item.title}
                />

                </div>

                <h4>{item.title}</h4>

            </div>

            ))}

            </div>

            {/* ================= CENTER ================= */}

            <div className="research-center">


            <div className="work-card">

                <h3>What I Worked On</h3>

                <ul>

                {researchData.work.map((item, index) => (

                    <li key={index}>
                    {item}
                    </li>

                ))}

                </ul>

                  </div> {/* End work-card */}

                </div> {/* End research-center */}
            {/* ================= RIGHT IMAGES ================= */}

<div className="image-column right-column">

  {researchData.gallery.slice(3, 6).map((item, index) => (

    <div
      key={index + 4}
      className="thumbnail-card"
      onClick={() => openImage(index + 4)}
    >

      <div className="thumbnail-image">

        <img
          src={item.image}
          alt={item.title}
        />

      </div>

      <h4>{item.title}</h4>

    </div>

  ))}

</div> {/* End right-column */}

</div> {/* End research-layout */}

{/* ================= DOCUMENTS ================= */}

<div className="document-section">

  <div className="document-card">

    <img
      src={researchData.recommendation.image}
      alt="Recommendation Letter"
    />

    <div className="document-content">

      <h3>Recommendation Letter</h3>

      <p>
        Received an official recommendation letter
        recognizing my contribution during the GIS &
        Flood Risk Assessment internship.
      </p>

      <button
            className="document-btn"
            onClick={() => setSelectedDocument(researchData.recommendation)}
            >
            View Letter
        </button>
    </div>

  </div>

  <div className="document-card">

    <img
      src={researchData.certificate.image}
      alt="Internship Certificate"
    />

    <div className="document-content">

      <h3>Internship Certificate</h3>

      <p>
        Successfully completed the internship in
        Python-based GIS & Flood Risk Zone
        Identification using QGIS and AHP.
      </p>

      <button
        className="document-btn"
        onClick={() => setSelectedDocument(researchData.certificate)}
        >
        View Certificate
        </button>

    </div>

  </div>

</div>

</div> {/* container */}
</section>

{/* ================= IMAGE MODAL ================= */}

{selectedImage && (

  <div
    className="image-modal"
    onClick={closeImage}
  >

    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="close-btn"
        onClick={closeImage}
      >
        ×
      </button>

      <button
        className="nav-btn left"
        onClick={previousImage}
      >
        ❮
      </button>

      <img
        src={selectedImage.image}
        alt={selectedImage.title}
      />

      <button
        className="nav-btn right"
        onClick={nextImage}
      >
        ❯
      </button>

      <div className="modal-text">

        <h2>{selectedImage.title}</h2>

        <p>{selectedImage.description}</p>

      </div>

    </div>
  

  </div>

)}
  {selectedDocument && (
  <div
    className="image-modal"
    onClick={() => setSelectedDocument(null)}
  >
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setSelectedDocument(null)}
      >
        ×
      </button>

      <img
        src={selectedDocument.image}
        alt="Document"
      />
    </div>
  </div>
)}
</>
);
};

export default Internship;