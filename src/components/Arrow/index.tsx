import * as React from "react";
import * as styles from "./styles.module.scss";

function Arrow() {
  return (
    <div className={styles.container}>
      <div className={styles.arrow}></div>
      <div className={styles.arrow}></div>
    </div>
  );
}

export default Arrow;