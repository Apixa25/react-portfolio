import React from "react";

import sphereImage from "../../assets/project-images/work-remote.jpg";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://work-remote-jsn-4d3b6593bab7.herokuapp.com/">
                {" "}
                <img
                  src={sphereImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Work-Remote-Job-Board"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Sorcerer's Sphere</h4>
              <p>
              Step into a realm of boundless possibilities with Work Remote, your premier destination for remote freelance work. As a hub of creativity and collaboration, we bring together seasoned professionals and visionary clients, fostering an environment where skills flourish and ideas come to life. Embrace the flexibility of remote work and discover a spectrum of projects tailored to your expertise. Join our dynamic community, where innovation knows no bounds. Your next chapter in the world of remote freelancing begins here—welcome to a realm of endless potential and unparalleled opportunities!
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Portfolio;