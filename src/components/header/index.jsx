import React from "react";

import imgSrc from "../../images/me.jpg";
import Socials from "../socials";

import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.profileWrapper}>
        <img
          className={classes.profilePicture}
          src={imgSrc}
          alt="Michael Xu"
        />
      </div>
      <div className={classes.profileContent}>
        <h1>Michael Xu</h1>
        <h2>Software Engineer</h2>
        <Socials />
      </div>
    </div>
  );
};

export default Header;
