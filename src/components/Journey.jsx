import journeyData from "../data/journeyData";
import "../styles/journey.css";

function Journey() {
  return (
    <section className="journey-section" id="journey">

      <div className="journey-header">
        <p className="journey-tag">
          MY JOURNEY
        </p>

        <h2>
          Learning Through
          <span> Real Challenges</span>
        </h2>

       <p>
      From academic foundations to real-world projects and research,
      every milestone strengthened my ability to solve meaningful problems
      through software and technology.
      </p>
      </div>

      <div className="timeline">

        {journeyData.map((item, index) => (
          <div key={index}>

            <div className="timeline-card">

              <div className="timeline-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

            </div>

            {index !== journeyData.length - 1 && (
              <div className="timeline-line"></div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default Journey;