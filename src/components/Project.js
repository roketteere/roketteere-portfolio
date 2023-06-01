/* Projects
For each project you feature in your portfolio, you should include the following:
    An image of the deployed application (either a GIF or a screenshot)
    The title of the project
    A link to the deployed application
    A link to the corresponding GitHub repository */
import React from "react";
import { Link } from "react-router-dom";

function Project() {
  return;
  <div className="container">
    <div className="jumbotron mt-5"></div>
    <h1 className="display-4">Welcome to the Project Page!</h1>
    <p className="lead">
      This is the project page of the MERN stack application.
    </p>

    <hr className="my-4" />
    <p>Click the button below to go to the Login page.</p>
    <Link className="btn btn-primary btn-lg" to="/login" role="button">
      Login
    </Link>
  </div>;
}

export default Project;
