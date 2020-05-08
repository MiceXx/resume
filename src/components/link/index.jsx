import React from "react";

import classes from "./link.module.css";

const Link = ({ desc, link = false, title, img }) => {
  return (
    <div className={classes.wrapper}>
      {img ? <div className={classes.imgicon}>{img}</div> : null}
      <div className={img ? classes.content : classes.noimgcontent}>
        {link ?
          <a className={classes.linkTitle} href={link}>
            {title}
          </a> : <span className={classes.title}>{title}</span>
        }
        <p className={classes.desc}>{desc}</p>
      </div>
    </div>
  );
};

export default Link;
