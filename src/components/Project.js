import { Carousel } from "react-bootstrap";
import { Git, SendCheckFill } from "react-bootstrap-icons";

function Project() {
  function projectRender(project) {
    return project.map((project, index) => (
      <Carousel.Item key={index} className="p-2">
        <button
          className="btn btn-secondary m-1"
          onClick={() => window.open(project.github)}>
          <Git className="text-danger fs-3" /> GitHub
        </button>
        <button
          className="btn btn-success"
          onClick={() => window.open(project.deployed)}>
          <SendCheckFill className="fs-3" />
          Deployed
        </button>
        <img
          src={project.image}
          className="d-block border rounded border-dark border-size-2 img-fluid"
          alt={project.title}
          style={{ maxWidth: "800px" }}
        />
        <Carousel.Caption>
          <div className="bg-success text-dark p-2 border border-warning border-size-1 rounded">
            <h5 className="fs-3">{project.title}</h5>
            <p>{project.description}</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    ));
  }

  const portfolio = [
    {
      title: "CMS Tech Blog",
      description:
        "This is a CMS style blog site where developers can publish their blog posts and comment on other developers’ posts as well. This site was built from scratch and deployed to Heroku.",
      image:
        "https://user-images.githubusercontent.com/1593262/241589536-8db8d250-d4ac-49ee-8f13-7f873d1f86dc.png",
      github: "https://github.com/roketteere/cms-tech-blog",
      deployed: "https://techytimeblog.herokuapp.com/",
    },
    {
      title: "TheNext5Days",
      description:
        "Enter a USA city and expect to get the weather forecast for the next 5 Days.",
      image: "https://github.com/roketteere/thenext5days/raw/main/demo.gif",
      github: "https://github.com/roketteere/thenext5days",
      deployed: "https://roketteere.github.io/thenext5days/",
    },
    {
      title: "Work Day Scheduler",
      description:
        "Work day task tracking app. A simple web app to keep track of all your 9-5 work tasks.",
      image:
        "https://github.com/roketteere/work-day-scheduler/raw/main/Assets/screenshots/screenshot-1.png",
      github: "https://github.com/roketteere/work-day-scheduler/",
      deployed: "https://roketteere.github.io/work-day-scheduler/",
    },
    {
      title: "Meg-Backend",
      description:
        "Backend for a reactjs front end app. MEG Backend has CRUD for User, Journey, Experience, Rating, and Emergency Contact. This also has geolocation using the native api and google maps api. Additionally, twilio is used for sending sms messages.",
      image:
        "https://user-images.githubusercontent.com/1593262/244513706-42db21e0-2b50-461a-928f-44df8cdaa63b.png",
      github: "https://github.com/roketteere/meg-backend",
      deployed: "https://meg-backend.herokuapp.com/",
    },
    {
      title: "Roketteere-Portfolio",
      description:
        "This is my portfolio site. It is built with Reactjs and Bootstrap.",
      image:
        "https://user-images.githubusercontent.com/1593262/244514791-d56d9ce6-ea9b-4805-b34f-52b04d6e399b.png",
      github: "https://github.com/roketteere/roketteere-portfolio",
      deployed: "https://roketteere-portfolio.netlify.app/",
    },
    {
      title: "My Express Mongo API",
      description:
        "This is a social media API that allows users to create, update, and delete users, thoughts, and reactions. Users can also add and remove friends from their friend list.",
      image:
        "https://user-images.githubusercontent.com/1593262/242424422-3d7ec53c-b165-472f-9b48-3ffd9c25e90e.mov",
      github: "https://github.com/roketteere/MyExpressMongoAPI",
      deployed: "https://github.com/roketteere/MyExpressMongoAPI",
    },
  ];

  return (
    <div className="d-flex justify-content-center">
      {<Carousel variant="dark">{projectRender(portfolio)}</Carousel>}
    </div>
  );
}

export default Project;
