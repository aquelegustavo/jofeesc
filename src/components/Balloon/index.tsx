import * as React from "react";
import * as styles from "./styles.module.scss";

function Balloon() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <span className="material-icons">event</span>
        <h3>06 e 07 de maio</h3>
      </div>
      <div className={styles.info}>
        <span className="material-icons">location_on</span>
        <h3>Araranguá, SC</h3>
      </div>
    </div>
  );
}

export default Balloon;
