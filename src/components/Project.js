/* Projects
For each project you feature in your portfolio, you should include the following:
    An image of the deployed application (either a GIF or a screenshot)
    The title of the project
    A link to the deployed application
    A link to the corresponding GitHub repository */
//
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Git, X, SendCheckFill } from "react-bootstrap-icons";

function Project() {
  function projectRender(project) {
    return project.map((project, index) => (
      <Carousel.Item key={index} className="p-2">
        <button className="btn btn-secondary m-1">
          <Git className="text-danger fs-3" /> GitHub
        </button>
        <button className="btn btn-success">
          <SendCheckFill className="fs-3" /> Deployed
        </button>
        <img
          src={project.image}
          className="d-block w-100 border rounded border-dark border-size-2"
          alt={project.title}
        />
        <Carousel.Caption>
          <h5>{project.title}</h5>
          <p>{project.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  }

  const projects = [
    {
      image: "https://placekitten.com/200",
      title: "SRS Flashcards",
      description:
        "This project is a flashcard application for studying the SRS.",
    },
    {
      image: "https://placekitten.com/200",
      title: "Express Blog",
      description: "This is a blog application built with Express.",
    },
    {
      image: "https://placekitten.com/200",
      title: "Express Note Taker",
      description: "This is a note taking application built with Express.",
    },
    {
      image: "https://placekitten.com/200",
      title: "Express Workout Tracker",
      description: "This is a workout tracker application built with Express.",
    },
    {
      image: "https://placekitten.com/200",
      title: "Express Budget Tracker",
      description: "This is a budget tracker application built with Express.",
    },
  ];

  return (
    <div className="container border rounded mb-5">
      <div className="card-header bg-primary m-2 p-2 rounded ">
        <h1 className="card-title p-1 text-white">Projects</h1>
      </div>
      {<Carousel>{projectRender(projects)}</Carousel>}
    </div>
  );
}

export default Project;
