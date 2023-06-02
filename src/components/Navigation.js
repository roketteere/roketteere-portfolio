import { House, Paperclip, Mailbox } from "react-bootstrap-icons";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary m-3">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="navbar-brand" href="/">
              <House /> Home
            </a>
          </li>
          <li>
            <a className="navbar-brand" href="/resume">
              <Paperclip /> Resume
            </a>
          </li>
          <li>
            <a className="navbar-brand" href="/contact">
              <Mailbox /> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
