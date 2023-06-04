// import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div className="container-md">
            <Navigation />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Project />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
