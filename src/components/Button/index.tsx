import { Link } from "gatsby";
import * as React from "react";
import * as styles from "./styles.module.scss";

function Button({ title, to }: { title: string; to: string }) {
  return (
    <Link to={to} target="_blank">
      <button className={styles.button}>
        <span>{title}</span>
      </button>
    </Link>
  );
}

export default Button;
