import React from "react";

import workRemote from "../../assets/project-images/work-remote.jpg";
import qif from "../../assets/project-images/Qif.png";
import textEditor from "../../assets/project-images/text-editor-pwa.gif";
import techBlog from "../../assets/project-images/tech-blog.jpg";
import employeeTracker from "../../assets/project-images/employee-tracker.png";
import noteTaker from "../../assets/project-images/note-taker.gif";

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
                  src={workRemote}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Work-Remote-Job-Board"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Work Remote - Remote Work Job Board</h4>
              <p>
                Step into a realm of boundless possibilities with Work Remote,
                your premier destination for remote freelance work. As a hub of
                creativity and collaboration, we bring together seasoned
                professionals and visionary clients, fostering an environment
                where skills flourish and ideas come to life. Embrace the
                flexibility of remote work and discover a spectrum of projects
                tailored to your expertise. Join our dynamic community, where
                innovation knows no bounds. Your next chapter in the world of
                remote freelancing begins here—welcome to a realm of endless
                potential and unparalleled opportunities!
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://apixa25.github.io/Qif-Generator/">
                {" "}
                <img
                  src={qif}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Qif - Quote and Gif Generator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Qif - Quote and Gif Generator</h4>
              <p>
                Our web-based application generates a quote and a giphy image by
                selecting the word of your choice. The user is presented with a
                drop-down box for their word and an “Add Word” button. Upon
                adding the word, a random quote and gif image will display based
                off of the word selected. The word will then be saved for the
                user to click as many times as they desire, each time refreshing
                with a new quote and gif image. The user is also able to click
                the “Clear Words” button to remove all their previously added
                words. For this project we used Zenquotes.io and
                giphy.com.framework.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://text-editor-pwa916-e253ae17fce3.herokuapp.com//">
                {" "}
                <img
                  src={textEditor}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Text Editor - Progressive Web App"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Text Editor - Progressive Web App</h4>
              <p>
                This project is a Text Editor with a beautiful color interface.
                It can be used to take notes or save code snippets with or
                without an internet connection. This project is a progressive
                web app (PWA). A PWA is a type of web application that utilizes
                modern web technologies to provide an app-like experience for
                users. One of the things that make PWA’s special is that they
                can work with varying levels of network connectivity, including
                offline mode. They use service workers to cache important
                resources and provide a reliable user experience even when the
                device is offline or has a poor network connection. This App
                utilizes this and even has an “install” feature so that the user
                can install the Text Editor directly to their machine and be
                able to use it completely offline.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://nerd-nook-news-tech-blog-cbb4ae9fd90f.herokuapp.com/login">
                {" "}
                <img
                  src={techBlog}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Tech Blog"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Tech Blog</h4>
              <p>
                Writing about tech can be just as important as making it.
                Developers spend plenty of time creating new applications and
                debugging existing codebases, but most developers also spend at
                least some of their time reading and writing about technical
                concepts, recent advancements, and new technologies. A simple
                Google search for any concept covered in this course returns
                thousands of think pieces and tutorials from developers of all
                skill levels!
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Apixa25/employee-tracker">
                {" "}
                <img
                  src={employeeTracker}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Employee Tracker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Employee Tracker</h4>
              <p>
                I built this employee tracker so that a person could quickly and
                easily see all the employees in a company, who they are, what
                they do, what department they are in, and who their manager is
                (or maybe they are the manager! It shows that also). Also with
                this employee tracker, a user can add new employees (including
                name, role, salary, and who they will work for). A user can also
                add roles, and departments also.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://simple-note-taker707-d91939829d81.herokuapp.com/">
                {" "}
                <img
                  src={noteTaker}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Simple And Easy Note Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Simple And Easy Note Taker</h4>
              <p>
                This is a simple and clean note-taking application. You run it
                in your browser. You make and “save” notes and they are saved
                persistently. That means if you close your browser and turn your
                computer off the notes you made will still be there the next
                time you open the note taker. Your notes will stay there till
                you choose to delete them. This application uses an Express.js
                back end. And it saves, retrieves, and deletes notes from a JSON
                file.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
