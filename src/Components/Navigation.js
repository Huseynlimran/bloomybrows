import React, { useState } from "react";


const Navigation = () => {


  
  const [active, setActive] = useState("nav-links");
  const [toggleIcon, setToggleIcon] = useState("burger");

  const showNav = () => {
    active === "nav-links"
      ? setActive("navlinks nav-active")
      : setActive("nav-links");

    // Toggle

    toggleIcon === "burger"
      ? setToggleIcon("burger toggle")
      : setToggleIcon("burger");
  };
  return (
    <div className="container">
      <nav className="container">
        <a href="/">
          <img src="img/logoB.png" className="logo" alt="" />
        </a>


        <ul className={active}>
          <li className="listLi">
            <a href="#do" className="linksNav">
              My Work
            </a>
          </li>
          <li className="listLi">
            <a href="#doing" className="linksNav">
              Features
            </a>
          </li>
          <li className="listLi">
            <a href="#project" className="linksNav">
              Pricing
            </a>
          </li>

          <li className="listLi">
            <a href="#aboutme" className="linksNav">
              Blog
            </a>
          </li>
        </ul>

        <div className={toggleIcon} onClick={showNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
