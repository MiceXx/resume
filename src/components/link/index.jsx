import React from "react";

import classes from "./link.module.css";

const Link = ({ desc, link = false, title, img }) => {
  return (
    <div className={classes.wrapper}>
      {img ? <div className={classes.imgicon}>{img}</div> : null}
      <div className={classes.content}>
        {link ?
          <a className={img ? classes.linkTitle : classes.linkTitleNI} href={link}>
            {title}
          </a> : <span className={img ? classes.title : classes.titleNI}>{title}</span>
        }
        <p className={img ? classes.desc : classes.descNI}>{desc}</p>
      </div>
    </div>
  );
};

export default Link;
