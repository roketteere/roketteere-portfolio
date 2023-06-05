import React from "react";
// import { Link } from "react-router-dom";
import { HandThumbsUp } from "react-bootstrap-icons";
import Project from "./Project";

function Home() {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <hr className="my-4" />
      </div>
      <div className="row">
        <div className="col-lg-6">
          <Project
            title="Project 1"
            description="This is a project"
            image="https://via.placeholder.com/150"
            deployed="https://www.google.com"
            github="https://www.github.com"
          />
        </div>
      </div>
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
}

export default Home;
