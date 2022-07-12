import React, { useState, useEffect } from "react";
import "./navbar.css";
let logo = require("../assets/logo.png");
let avatar = require("../assets/emoji.png");
const Navbar = () => {
  const [show, handleshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else handleshow(false);
    });
  });
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="logo" />
      <img className="nav__avatar" src={avatar} alt="smiley" />
    </div>
  );
};

export default Navbar;
