import React from "react";
import { Github } from "react-bootstrap-icons";


export default function Footer() {
  function go() {
    document.location.replace("http://github.com/roketteere");
  }
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary bi bi-github"
        onClick={go}>
        {"Github "}
        <Github />
      </button>
    </div>
  );
}
