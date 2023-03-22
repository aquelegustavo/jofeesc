import * as React from "react";
import { Link } from "gatsby";
import { useEffect, useState } from "react";
import Drawer from "../Drawer";
import Logo from "../Logo";
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

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const items: Item[] = [
    {
      id: "about",
      title: "Sobre",
      href: "#sobre",
    },
    { id: "schedule", title: "Programação", href: "#agenda" },
    {
      id: "where",
      title: "Local",
      href: "#local",
    },
    {
      id: "up",
      title: "Inscreva-se",
      href: "https://www.even3.com.br/jofeesc/",
      target: "_blank",
    },
  ];

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        scrollPosition > 0 ? styles.activeScroll : ""
      }`}
    >
      <Link to="/" className={styles.logo}>
        <Logo />
      </Link>

      <div className={styles.wrapper}></div>
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          {items.map((item) => (
            <Link
              key={item.id}
              to={item.href ?? "/"}
              target={item.target ?? "_self"}
            >
              <a title={item.title}>{item.title}</a>
            </Link>
          ))}
        </nav>
      </div>

      <div className={styles.drawerContainer}>
        <Drawer items={items} />
      </div>
    </header>
  );
}

export default Header;
