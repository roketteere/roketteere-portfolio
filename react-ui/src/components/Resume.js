import React from "react";
import { useState } from "react";
import { ArrowsCollapse } from "react-bootstrap-icons";

// breaking down my resume into react components to make it easier to
// read and maintain
const ContactInfo = () => (
  <div className="border border-primary-subtle rounded card-body m-2">
    <h3 className="card-title bg-primary rounded p-2 text-white">Contact</h3>
    <p className="card-text">
      <span className="fw-bold">Name: </span> JOEL PEREZ
    </p>
    <p className="card-text">
      <span className="fw-bold">Phone:</span> 408-490-0135
    </p>
    <p className="card-text">
      <span className="fw-bold">Email:</span> Jxp489@gmail.com
    </p>
    <p className="card-text">
      <span className="fw-bold">Address:</span> 9604 Southern Pines Ct, Davie
      FL, 33328
    </p>
  </div>
);

const Objective = () => (
  <div className="border border-primary-subtle rounded card-body m-2">
    <h3 className="card-title bg-primary rounded p-2 text-white">Objective</h3>
    <p className="card-text">
      Entry-level software developer that is creative, eager to learn, and great
      with communication...
    </p>
  </div>
);

const Skills = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="border border-primary-subtle rounded card-body m-2">
      <h3
        className="card-title bg-primary rounded p-2 text-white"
        onClick={toggleCollapse}
        style={{ cursor: "pointer" }}>
        <ArrowsCollapse /> Skills
      </h3>
      <ul className={`list-group ${isCollapsed ? "collapse" : ""}`}>
        <li className="list-group-item">Javascript</li>
        <li className="list-group-item">Python</li>
        <li className="list-group-item">Reactjs</li>
        <li className="list-group-item">Nodejs</li>
        <li className="list-group-item">MongoDB</li>
        <li className="list-group-item">Mongoose</li>
        <li className="list-group-item">MySQL</li>
        <li className="list-group-item">Sequelize</li>
        <li className="list-group-item">Handlebars</li>
        <li className="list-group-item">jQuery</li>
        <li className="list-group-item">APIs</li>
        <li className="list-group-item">JSON</li>
        <li className="list-group-item">Express</li>
        <li className="list-group-item">HTML</li>
        <li className="list-group-item">CSS</li>
        <li className="list-group-item">Bootstrap</li>
        <li className="list-group-item">Git</li>
        <li className="list-group-item">Github</li>
        <li className="list-group-item">Heroku</li>
      </ul>
    </div>
  );
};

const Experience = () => (
  <div className="border border-primary-subtle rounded card-body m-2">
    <h3 className="card-title bg-primary rounded p-2 text-white">
      Experience/Accomplishments
    </h3>

    <h4 className="card-text">
      Reprovisioned CDMA Cellular Phones (2008-2012)
    </h4>
    <p className="card-text">
      HEX Editing – able to overwrite system memory addresses...
    </p>
  </div>
);

const Education = () => (
  <div className="border border-primary-subtle rounded card-body m-2">
    <h3 className="card-title bg-primary rounded p-2 text-white">Education</h3>
    <p className="card-text">University of Washing Coding Bootcamp (2023)</p>
  </div>
);

const Resume = () => (
  <div className="card ">
    <ContactInfo />
    <Objective />
    <Skills />
    <Experience />
    <Education />
  </div>
);

export default Resume;
