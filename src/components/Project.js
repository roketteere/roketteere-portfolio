/* Projects
For each project you feature in your portfolio, you should include the following:
    An image of the deployed application (either a GIF or a screenshot)
    The title of the project
    A link to the deployed application
    A link to the corresponding GitHub repository */
//
import { useState } from "react";

document.addEventListener("click", function (e) { 
  console.log(e.target);
})


let count = 1;
function goRepo() {
  const URL = "www.URL.com";
  alert(URL);
}

function Project() {
  let [index, updateCount] = useState(0);
  let [hi, updateHi] = useState("Hi " + " count: " + index);

  function Hi() {
    updateCount(index + 1);
    updateHi((hi = "Hi " + " count: " + index));
  }

  function Clear() {
    updateCount((index = 0));
    updateHi((hi = ""));
  }

  return (
    <div className="container">
      {/* Project has, Image, Title, Link To Deployed, Link To Repo */}
      <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome to the Project Page!</h1>
        <p className="lead">
          This is the project page of the MERN stack application.
        </p>
        <hr className="my-4" />
        <div className="project-container">
          <img src="https://via.placeholder.com/150" alt="placeholder" />
          <h3>Project Title</h3>
          <button className="rounded m-2 bg-primary text-white " onClick={Hi}>
            HerokuApp Deployed
          </button>
          <button
            className="rounded m-2 bg-primary text-white "
            onClick={Clear}>
            Clear
          </button>
          <p>Hi: {hi}</p>
          <p>{index}</p>
          <br />
          <button onClick={goRepo}>Github Repo</button>
          <p>{}</p>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Project;
