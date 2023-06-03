import { House, Paperclip, Mailbox } from "react-bootstrap-icons";
import { useState } from "react";

export default function Navigation() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Joel Perez | Full Stack Developer
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded={!isCollapsed ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link \" href="/">
                <House /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resume">
                <Paperclip /> Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">
                <Mailbox /> Contact
              </a>
            </li>
          </ul>
          <span className="navbar-text">Joel Perez | Full Stack Developer</span>
        </div>
      </div>
    </nav>
  );
}
