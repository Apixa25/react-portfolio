import React from "react";
import profileImage from "../../assets/profile-images/profile.jpg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img
              src={profileImage}
              style={{
                width: "100%",
                padding: 30,
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              alt="profile"
            />
          </div>
          <p>
            What would I like you to know about me? If you are looking at this
            thinking you might want to hire me then I would like you to know how
            hard of a worker I am. And that I bring to the table a very diverse
            set of skills because of my age and broad world experience. The
            greatest of which is my ability to work with people. I have an
            amazing contact book. Anything anyone ever did that was great they
            did not do alone. If you get to know me you will hear me often say
            “You cannot win the Super Bowl by yourself. It takes a whole team of
            great players.” That said I personally have done my best work
            getting to stand on the shoulders of giants. If you hire me you are
            bringing far more than just me onto the team. Your bringing me and a
            team of wonderful people I have to draw upon. If you want to know
            some personal stuff about me, well… I love nature. When I am not
            working I am hiking and biking. I am an explorer at heart. I very
            rarely take the same trail twice. Even on the old tried and true
            path Ill go off trail and look for areas Ive never seen before.
            Theres nothing better for clearing the mind to formulate new ideas
            than heading out in nature. I have been blessed to get to live in
            some incredibly beautiful places! I love friendship! So if for no
            other reason than to make a new friend please feel free to contact
            me!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
