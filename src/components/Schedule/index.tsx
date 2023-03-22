import * as React from "react";
import * as styles from "./styles.module.scss";
import useScript from "../../hooks/useScript";

function Schedule() {
  useScript("https://www.even3.com.br/widget/js?e=jofeesc&t=session&lang=pt");

  return (
    <div id="agenda" className={styles.wrapper}>
      <h1 className={styles.title}>Programação</h1>
      <div className={styles.event3}>
        <div id="even3-widget-session"></div>
      </div>
    </div>
  );
}

export default Schedule;
