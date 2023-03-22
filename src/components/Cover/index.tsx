import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles.module.scss";
import Arrow from "../Arrow";
import Balloon from "../Balloon";

function Cover() {
  return (
    <div className={styles.cover}>
      <div className={styles.wall}>
        <div className={`${styles.face} ${styles.back}`}></div>
        <div className={`${styles.face} ${styles.bottom}`}></div>
      </div>
      <div className={styles.runnerContainer}>
        <StaticImage
          src="../../images/runner.png"
          alt="Corredor"
          placeholder="none"
          transformOptions={{ fit: "cover" }}
          layout="constrained"
        />
      </div>
      <h1 className={styles.title}>JOFEESC</h1>
      <Balloon/>
      <Arrow/>
    </div>
  );
}

export default Cover;
