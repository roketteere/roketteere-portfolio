/* Projects
For each project you feature in your portfolio, you should include the following:
    An image of the deployed application (either a GIF or a screenshot)
    The title of the project
    A link to the deployed application
    A link to the corresponding GitHub repository */
//
import { useState } from "react";
import { Git } from "react-bootstrap-icons";

document.addEventListener("click", function (e) {
  console.log(e.target);
});

let count = 1;
function goRepo() {
  const URL = "Source URL Coming Soon Papa!";
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
      <div className="jumbotron mt-5 ">
        <h1 className="display-4">Welcome to the Project Page!</h1>
        <p className="lead">
          This is the project page of the MERN stack application.
        </p>
        <hr className="my-4" />
        <div className="project-container border rounded">
          <img
            className="border rounded m-1"
            src="http://placekitten.com/200/200"
            alt="placeholder"
          />
          <h3>Project Title</h3>
          <p>
            Well this is a Reactjs Portfolio Web App! That's project number
            one...
          </p>
          <button
            onClick={goRepo}
            type="button"
            className="btn btn-secondary m-2">
            <Git className="text-danger" />
            View Source
          </button>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Project;
