import React from "react";
import { Github, Linkedin, StackOverflow } from "react-bootstrap-icons";

export default function Footer() {
  function goGithub() {
    window.open("http://github.com/roketteere");
  }

  function goLinkedIn() {
    window.open("https://www.linkedin.com/in/joel-perez-0aaa2a138");
  }
  return (
    <div className="position-fixed bottom-0">
      <button
        type="button"
        className="btn btn-primary bi bi-github m-2"
        onClick={goGithub}>
        <Github className="bg-dark" />
        {" Github"}
      </button>
      <button
        type="button"
        className="btn btn-primary bi bi-linkedin m-2"
        onClick={goLinkedIn}>
        <Linkedin />
        {" LinkedIn"}
      </button>
      <button
        type="button"
        className="btn btn-primary bi bi-linkedin m-2"
        onClick={goLinkedIn}>
        <StackOverflow className="bg-warning" />
        {" StackOverflow"}
      </button>
    </div>
  );
}
