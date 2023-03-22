import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles.module.scss";
import { Link } from "gatsby";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <StaticImage
          src="../../images/logo.png"
          alt="Corredor"
          placeholder="none"
          width={200}
          height={200}
        />
       <div className={styles.links}>
       <section>
          <h3>Contato</h3>
          <span>jofeesc@contato.ufsc.br</span>
        </section>
        <section>
          <h3>Redes Sociais</h3>
          <Link className={styles.insta} to="https://instagram.com/jofeesc" target="_blank">
            <StaticImage
              alt="Logo Instagram"
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
              width={32}
              height={32}
              placeholder="none"
            />
            @jofeesc
          </Link>
        </section>
       </div>
      </div>
      <p className={styles.copyright}>
        Feito com <del>um teclado</del> amor e muito café por <Link to="mailto:gustavo@gsimoes.dev" target="_blank">Gustavo Simões</Link>
      </p>
    </footer>
  );
}

export default Footer;
