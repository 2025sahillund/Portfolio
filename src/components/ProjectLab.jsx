import { useState } from "react";
import projectsData from "../data/projectsData";
import "../styles/projectlab.css";

export default function ProjectLab() {
  const [selectedImage, setSelectedImage] = useState(null);


  const [activeFeature, setActiveFeature] = useState(0);
  const [displayFeature, setDisplayFeature] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const featuredProject = projectsData.find(
    (project) => project.featured
  );

  const otherProjects = projectsData.filter(
  ( project) =>
     !project.featured &&
     project.showInProjects
    );

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        {/* ================= HEADER ================= */}

        <div className="projects-header">
          <span className="section-tag">PROJECTS</span>

          <h2>Selected Projects</h2>

          <p>
            Real-world software solutions developed to solve practical
            challenges using Python, GIS, Flutter and modern development
            technologies.
          </p>
        </div>

        {/* ================= FEATURED PROJECT ================= */}

        <div className="featured-project">

          {/* LEFT */}
            <div className="project-left">

              <span className="featured-label">
                Featured Project
              </span>

              <h2 className="project-title">
                {featuredProject.title}
              </h2>

              <h3 className="project-subtitle">
                {featuredProject.subtitle}
              </h3>

              <p className="project-description">
                {featuredProject.description}
              </p>

              <div className="tech-stack">

                {featuredProject.technologies.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}

              </div>

              <div className="problem-solution">

                <div className="info-card">

                  <span className="card-title">
                    Problem
                  </span>

                  <p>
                    {featuredProject.problem}
                  </p>

                </div>

                <div className="info-card">

                  <span className="card-title">
                    Solution
                  </span>

                  <p>
                    {featuredProject.solution}
                  </p>

                </div>

              </div>

              <div className="impact-section">

                <span className="impact-title">

                  PROJECT IMPACT

                </span>

                <div className="impact-list">

                  {featuredProject.impact.map((item) => (

                    <div
                      key={item}
                      className="impact-item"
                    >

                      <span>

                        ✓

                      </span>

                      <p>

                        {item}

                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          {/* RIGHT */}

         <div className="project-right">

          <div className="preview-header">

            <span className="section-tag">
              APPLICATION SHOWCASE
            </span>

            <h3>Inside FRZIT</h3>

            <p>
              Explore the major modules of the application through
              real screenshots from the desktop software.
            </p>

          </div>

          <div className="feature-showcase">

            {/* ---------- LEFT NAVIGATION ---------- */}

            <div className="feature-list">

              {featuredProject.gallery.map((item, index) => (

                <button
                  key={item.title}
                  className={`feature-item ${
                    activeFeature === index ? "active" : ""
                  }`}
                  onClick={() => {

                    if(index === activeFeature) return;

                    setActiveFeature(index);

                    setIsChanging(true);

                    setTimeout(() => {

                        setDisplayFeature(index);

                        setIsChanging(false);

                    }, 220);

                }}
                >

                  <span className="feature-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="feature-text">

                    <h5>{item.title}</h5>

                    <p>
                      {item.description.substring(0, 55)}...
                    </p>

                  </div>

                </button>

              ))}

            </div>

            {/* ---------- PREVIEW ---------- */}

            <div className="feature-preview">

              <div
                  className={`preview-content ${
                      isChanging ? "preview-hide" : "preview-show"
                  }`}
              >

              <div className="feature-image">

              <img
                src={featuredProject.gallery[displayFeature].image}
                alt={featuredProject.gallery[displayFeature].title}
                onClick={() =>
                  setSelectedImage(
                    featuredProject.gallery[displayFeature].image
                  )
                }
              />

              </div>

              <div className="feature-info">

                <span className="preview-tag">
                  SCREEN PREVIEW
                </span>

                <h4>
                  {featuredProject.gallery[displayFeature].title}
                </h4>

                <p>
                  {featuredProject.gallery[displayFeature].description}
                </p>

              </div>

            </div>
          </div>    
          </div>

        </div>

        </div>

        {/* ================= OTHER PROJECTS ================= */}

        {otherProjects.length > 0 && (

          <div className="other-projects">

            {otherProjects.map((project) => (

              <div
                key={project.id}
                className="project-card"
              >

                <img
                  src={project.heroImage}
                  alt={project.title}
                />

                <div className="project-card-content">

                  <h3>{project.title}</h3>

                  <h5>{project.subtitle}</h5>

                  <p>{project.description}</p>

                  <div className="tech-stack">

                    {project.technologies.map((tech) => (

                      <span key={tech}>
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

      {/* ================= IMAGE MODAL ================= */}

      {selectedImage && (

        <div
          className="project-modal"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="project-modal-box"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="project-close"
              onClick={() =>
                setSelectedImage(null)
              }
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="Project"
            />

          </div>

        </div>

      )}

    </section>
  );
}