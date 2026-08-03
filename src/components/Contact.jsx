import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-card">

        <p className="contact-tag">
          GET IN TOUCH
        </p>

        <h2>
          Let's Connect
        </h2>

        <p className="contact-text">
          Thank you for taking the time to explore my portfolio.
          I enjoy building software that solves real-world problems
          and I'm open to discussing internships,
          full-time opportunities, freelance work, or innovative projects.
        </p>

        <p className="contact-text">
          If you think my skills and experience align with your
          team or project, I'd be happy to connect.
        </p>

        <a
          href="mailto:sahillund118@gmail.com"
          className="contact-btn"
        >
          Send an Email
        </a>

      </div>

      <div className="footer">

        © 2026 Sahil Lund • Built with React & Vite

      </div>

    </section>
  );
}

export default Contact;