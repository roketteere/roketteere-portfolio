import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome to the Home Page!</h1>
        <p className="lead">
          This is the home page of the MERN stack application.
        </p>
        <hr className="my-4" />
        <p>Click the button below to go to the Login page.</p>
        <Link className="btn btn-primary btn-lg" to="/login" role="button">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Home;