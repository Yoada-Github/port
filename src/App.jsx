import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Skill from "./page/Skill";
import Project from "./page/Project";
import Resume from "./page/Resume";
import Contact from "./page/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/project" element={<Project />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
