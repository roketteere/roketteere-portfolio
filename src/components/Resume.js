import { useState } from "react";
import { ArrowsCollapse } from "react-bootstrap-icons";
const downloadResume = "../download/joel_perez_resume.pdf";

// breaking down my resume into react components to make it easier to
// read and maintain
const ContactInfo = () => (
  <div className="border border-light rounded card-body m-2 bg-dark text-light">
    <h3 className="card-title bg-dark rounded p-2 text-white">Contact</h3>
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
  <div className="border border-light rounded card-body m-2 bg-dark text-light">
    <h3 className="card-title bg-dark rounded p-2 text-white">Objective</h3>
    <p className="card-text">
      To obtain a position as a full stack developer where I can utilize my
      skills and experience to help your company grow. I am both self-taught and
      a bootcamp graduate. I am a very hard working person and I am always
      looking for new opportunities. I am a fast learner and I am always looking
      to learn new things.
    </p>
  </div>
);

const Skills = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="border border-light rounded card-body m-2 bg-dark text-light">
      <h3
        className="card-title bg-dark rounded p-2 text-white"
        onClick={toggleCollapse}
        style={{ cursor: "pointer" }}>
        <ArrowsCollapse /> Proficiencies
      </h3>
      <ul
        className={`list-group bg-dark text-light ${
          isCollapsed ? "collapse" : ""
        }`}>
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
  <div className="border border-light rounded card-body m-2 bg-dark text-light">
    <h3 className="card-title bg-dark rounded p-2 text-white">Experience</h3>

    <h4 className="card-text">
      <span className="fw-bold">Full Stack Developer</span>
      <br />
      <span className="fw-light">Dev Ops</span>
    </h4>
    <p className="card-text">Database</p>
  </div>
);

const Education = () => (
  <div className="border border-light rounded card-body m-2 bg-dark text-light">
    <h3 className="card-title bg-dark rounded p-2 text-white">Education</h3>
    <p className="card-text">University of Washing Coding Bootcamp (2023)</p>
    <p className="card-text">
      MERN Fullstack - MongoDB, Express, React, Nodejs
    </p>
  </div>
);

const Badges = () => (
  <div>
    <p className="lead">
      <img
        className="m-2"
        src="https://img.shields.io/badge/MongoDB-Database-brown"
        alt="MongoDB"
      />
      <img
        className="m-2"
        src="https://img.shields.io/badge/Express-Routing-red"
        alt="Express"
      />
      <img
        className="m-2"
        src="https://img.shields.io/badge/React-FrontEnd-purple"
        alt="React"
      />
      <img
        className="m-2"
        src="https://img.shields.io/badge/Nodejs-Server-green"
        alt="Nodejs"
      />
      <img
        className="m-2"
        src="https://img.shields.io/badge/Language-Javascript-yellow"
        alt="JS"
      />
      <img
        className="m-2"
        src="https://img.shields.io/badge/Scripting-HTML-orange"
        alt="HTML"
      />
      <img
        className="m-2"
        src="https://img.shields.io/badge/Styling-CSS-blue"
        alt="CSS"
      />
      <img
        className="m-2"
        src="https://img.shields.io/badge/Framework-Bootstrap-purple"
        alt="Bootstrap"
      />
      <img
        className="m-2"
        src="https://img.shields.io/badge/Package-React_Bootstrap-blue"
        alt="React Bootstrap"
      />
      <img
        className="m-2"
        src="https://img.shields.io/badge/Package-React_Icons-green"
        alt="React Icons"
      />
    </p>
  </div>
);

const Resume = () => (
  <div className="card bg-dark text-light">
    <Badges />
    <a
      className="d-flex align-items-center justify-content-center align-self-center btn-bi m-2 nav-link border border-light rounded p-2 w-25"
      href={downloadResume}
      download>
      Download Resume
    </a>
    <ContactInfo />
    <Objective />
    <Skills />
    <Experience />
    <Education />
  </div>
);

export default Resume;
