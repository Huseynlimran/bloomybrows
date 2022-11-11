import React, { useState } from "react";

import gsap, { Power3 } from "gsap";
import { useEffect } from "react";


const Navigation = () => {

  useEffect(() => {

    gsap.fromTo("nav",{
      y : -100,
      opacity: 1,
      ease:Power3.easeOut
    }, 
    {
      y: 0, duration: 2,opacity: 1,delay:2.9
    })

  })

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
              РАБОТЫ
            </a>
          </li>
          <li className="listLi">
            <a href="#doing" className="linksNav">
              УСЛУГИ
            </a>
          </li>
          <li className="listLi">
            <a href="#price" className="linksNav">
            ПРАЙС
            </a>
          </li>

          <li className="listLi">
            <a href="#about" className="linksNav">
            ОБО МНЕ
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
