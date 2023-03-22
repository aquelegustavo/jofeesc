import * as React from "react";
import { Link } from "gatsby";
import useDropdownMenu from "../../hooks/useDropdownMenu";
import * as styles from "./styles.module.scss";

type Item = {
  id: string;
  title: string;
  href?: string;
  target?: string;
  subitems?: Item[];
};

type SubItem = {
  id: string;
  title: string;
  href: string;
  target?: string;
};

type ItemWithSubitems = {
  id: string;
  title: string;
  subitems: SubItem[];
};

type DropdownProps = {
  items: Item[];
};

function Drawer({ items }: DropdownProps) {
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(
    items.length
  );

  return (
    <div className={styles.container}>
      <button
        {...buttonProps}
        className={`${styles.menuButton} ${styles.iconButton}`}
      >
        <span className="material-icons">menu</span>
      </button>

      <div
        className={`${styles.drawer} ${isOpen ? styles.open : ""}`}
        role="menu"
      >
        <div className={styles.header}>

          <button
            className={`material-icons ${styles.closeButton} ${styles.iconButton}`}
            onClick={() => setIsOpen(false)}
          >
            <span className="material-icons">close</span>
          </button>
        </div>
        <nav className={styles.nav}>
          {items.map((item, index) => {
            return (
              <div key={item.id}>
                <Link to={item.href || "/"} target={item.target ?? "_self"}>
                  <a {...itemProps[index]}>{item.title}</a>
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
      <div className={isOpen ? styles.mask : ""}></div>
    </div>
  );
}

export default Drawer;
