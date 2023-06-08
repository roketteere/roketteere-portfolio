import { House, Paperclip, Mailbox, CodeSlash } from "react-bootstrap-icons";
import { useState } from "react";


export default function Navigation() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container">
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
              <a className="nav-link" href="/">
                <House className="fs-3" /> About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">
                <CodeSlash className="fs-3" /> Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resume">
                <Paperclip className="fs-3" /> Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                <Mailbox className="fs-3" /> Contact
              </a>
            </li>
          </ul>
          <span className="navbar-text fs-3 fw-1 text-light p-2">Welcome!</span>
        </div>
      </div>
    </nav>
  );
}
