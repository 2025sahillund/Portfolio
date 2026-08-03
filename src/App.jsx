import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Internship from "./components/ResearchInternship";
import ProjectLab from "./components/ProjectLab";
import Skills from "./components/Skills";
import Hackathons from "./components/Hackathons";
import Achievements from "./components/Achievements";
import CareSync from "./components/CareSync";
import ISROVolunteer from "./components/ISROVolunteer";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Journey />
      <Internship />
      <ISROVolunteer />
      <ProjectLab />
      <CareSync />
      <Skills />
      <Hackathons />
      <Achievements />
      <Contact />
      
    </>
  );
}

export default App;