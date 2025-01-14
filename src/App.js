import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";


function App() {
  return (
    <div>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
    </Routes> 
    </Router> 
    </div>
  );
}

export default App;

