import "./App.css";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import AIWorkflow from "./components/AIWorkflow";
import ExperienceCarousel from "./components/ExperienceCarousel";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Dragonfly from "./components/Dragonfly";

function App() {
  return (
    <div className="layout" style={{ position: "relative" }}>
      <Dragonfly />
      <Sidebar />
      <main className="main">
        <About />
        <AIWorkflow />
        <ExperienceCarousel />
        <ProjectsCarousel />
      </main>
    </div>
  );
}

export default App;
