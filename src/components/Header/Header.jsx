import React from "react";
import Nav from "../Nav/Navbar";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Steven Sills II Work Portfolio</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">
          {/* <img
            src={coverImage}
            className="my-2"
            style={{ width: "100%" }}
            alt="cover"
          /> */}

          <h2>Welcome!</h2>
          <p>
            Thank you for taking the time to look at my portfolio page built with React! Here,
            you will find information about me and my projects. 
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;