import "./../styles/hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-left">

        <p className="hero-tag">
          PROBLEM SOLVER • BUILDER • LEARNER
        </p>

        <h1 className="hero-title">
          Turning Challenges
          <br />
          Into Solutions.
        </h1>

        <p className="hero-subtitle">
          Learning. Building. Solving.
        </p>

       <p className="hero-description">
        I build practical software that solves real-world problems—from GIS-based
        flood risk analysis and healthcare applications to AI-powered hackathon
        projects—using Python, Flutter, React, and modern development technologies.
      </p>


      </div>

      <div className="hero-right">

  <div className="hero-placeholder">

    <div className="flow-step">

      <span className="step-number">01</span>

      <div className="step-content">

        <h4>Learn</h4>

        <p>Understand the problem and domain</p>

      </div>

    </div>

    <div className="flow-line"></div>

    <div className="flow-step">

      <span className="step-number">02</span>

      <div className="step-content">

        <h4>Research</h4>

        <p>Explore technologies and analyze solutions</p>

      </div>

    </div>

    <div className="flow-line"></div>

    <div className="flow-step">

      <span className="step-number">03</span>

      <div className="step-content">

        <h4>Build</h4>

        <p>Develop practical software for real-world use</p>

      </div>

    </div>

    <div className="flow-line"></div>

    <div className="flow-step">

      <span className="step-number">04</span>

      <div className="step-content">

        <h4>Deliver</h4>

        <p>Test, improve and continuously learn</p>

      </div>

    </div>

  </div>

</div>

    </section>
  );
}

export default Hero;