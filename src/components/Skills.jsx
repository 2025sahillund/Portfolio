import skillsData from "../data/skillsData";
import "../styles/skills.css";

import {
  FaPython,
  FaJava,
  FaReact,
  FaGitAlt,
  FaLinux
} from "react-icons/fa";

import {
  SiFlutter,
  SiFirebase,
  SiMysql,
  SiFastapi,
  SiStreamlit,
  SiQgis
} from "react-icons/si";

function getIcon(iconName) {
  switch (iconName) {
    case "python":
      return <FaPython />;

    case "java":
      return <FaJava />;

    case "react":
      return <FaReact />;

    case "flutter":
      return <SiFlutter />;

    case "firebase":
      return <SiFirebase />;

    case "mysql":
      return <SiMysql />;

    case "git":
      return <FaGitAlt />;

    case "linux":
      return <FaLinux />;

    case "fastapi":
      return <SiFastapi />;

    case "streamlit":
      return <SiStreamlit />;

    case "qgis":
      return <SiQgis />;

    default:
      return null;
  }
}

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="skills-header">
        <p>SKILLS & TECHNOLOGIES</p>

        <h2>
          Tools I Use To
          <span> Build Solutions</span>
        </h2>
      </div>

      {skillsData.map((group, index) => (
        <div key={index} className="skills-group">

          <h3>{group.category}</h3>

          <div className="skills-grid">

            {group.skills.map((skill, i) => (
              <div className="skill-card" key={i}>

                <div className="skill-icon">
                    {getIcon(skill.icon)}
                </div>

                <h4 className="skill-name">
                    {skill.name}
                    </h4>

                <div className="skill-overlay">
                
                <h4>{skill.name}</h4>

                  {skill.details.map((item, idx) => (
                    <p key={idx}>
                      ✓ {item}
                    </p>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>
      ))}

    </section>
  );
}

export default Skills;