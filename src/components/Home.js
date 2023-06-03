import React from "react";
// import { Link } from "react-router-dom";
import { HandThumbsUp } from "react-bootstrap-icons";

function Home() {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">
          <i className="bi bi-home">
            <HandThumbsUp />
          </i>
          Joel Perez - Fullstack Developer
        </h1>
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
        <hr className="my-4" />
      </div>
    </div>
  );
}

export default Home;
