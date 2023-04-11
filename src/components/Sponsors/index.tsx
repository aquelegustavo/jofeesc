import * as React from "react";
import * as styles from "./styles.module.scss";

function Sponsors() {
  return (
    <div className={styles.sponsors}>
      <div className={styles.p1}>
        <h2>Patrocínio</h2>
        <img src="/images/p1.png" alt="Patrocínio" />
      </div>
      <div className={styles.p2}>
        <h2>Realização e apoio</h2>
        <img src="/images/p2.png" alt="Realização e apoio" />
      </div>
    </div>
  );
}

export default Sponsors;
