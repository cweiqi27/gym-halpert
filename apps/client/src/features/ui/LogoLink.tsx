import React from "react";
import { Link } from "react-router-dom";
import styles from "./LogoLink.module.scss";

const LogoLink = () => {
  return (
    <Link to="/">
      <div className={styles.logo}>Gym Halpert</div>
    </Link>
  );
};

export default LogoLink;
