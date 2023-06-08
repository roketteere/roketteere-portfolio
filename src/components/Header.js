import { HandThumbsUp } from "react-bootstrap-icons";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="header d-flex flex-column justify-content-center align-items-center">
      <h1 className="h2">
        <a className="navbar-brand fs-1 text-white p-2" href="/">
          <HandThumbsUp /> Joel Perez | Full Stack Developer
        </a>
      </h1>
      <Navigation />
    </header>
  );
}
