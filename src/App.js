// import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Project from "./components/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const downloadResume = "./download/joel_perez_resume.pdf";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div className="container-md mb-1">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/download/resume"
              element={<a href={downloadResume}>Download Resume</a>}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
