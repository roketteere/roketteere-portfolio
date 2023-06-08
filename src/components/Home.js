import React from "react";
// import { Link } from "react-router-dom";
import { HandThumbsUp } from "react-bootstrap-icons";

function Home() {
  return (
    <div className="container">
      <h1 className="text-center text-white">About Me</h1>
      <hr />
      <div className="border border-secondary rounded-3 p-3 bg-dark">
        <p className="lead text-center fs-5 text-white">
          Hello, my name is Joel Perez, a recent graduate from the University of
          Washington's 12-week MERN full-stack bootcamp. During my intensive
          training, I've developed a strong foundation in MongoDB, Express,
          React, and Node.js, and honed my JavaScript skills to become
          proficient in reading documents and implementing complex
          functionalities. Life has taught me to be a good juggler—balancing
          family responsibilities, rigorous studies, and my deep passion for
          coding. I'm a proud husband to a hardworking travel nurse and a
          dedicated father to our three beautiful children. Striving to provide
          the best for my family, I found solace and excitement in the world of
          coding and developing. My journey in tech has allowed me to explore
          various domains and tools. From utilizing Git and GitHub for version
          control to strategically planning and organizing projects using Kanban
          boards and user stories, I've adopted a holistic approach to
          development. In the pursuit of demonstrating my skills, I've built a
          portfolio web application using React.js, which features five of my
          main projects. I revel in the challenge each new project brings and
          the opportunity to learn and grow with it. I have a budding interest
          in DevOps and the potential of creating libraries and frameworks. The
          idea of shaping the very tools that developers use to create
          fascinating applications is immensely appealing to me. I'm looking
          forward to joining a team that values learning, challenge, and growth
          as much as I do. I'm eager to apply my skills, learn new technologies,
          and contribute to creating impressive solutions. While my journey in
          tech has just begun, I know it's a path I want to continue walking
          down. If you're looking for someone who's driven by curiosity and
          motivated by challenge, I'd love to connect!
        </p>
      </div>
    </div>
  );
}

export default Home;
