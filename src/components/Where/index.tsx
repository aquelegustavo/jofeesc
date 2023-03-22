import * as React from "react";
import * as styles from "./styles.module.scss";

function Where() {
  const contact = [
    {
      title: "Email",
      icon: "email",
      paragraph:
        "Entre em contato com a organização do evento pelo email jofeesc@contato.ufsc.br",
    },
    {
      title: "Endereço",
      icon: "place",
      paragraph:
        "Av. 15 de Novembro, 61 - Aeroporto, Araranguá - SC, 88905-112. IFSC - Campus Araranguá",
    },
  ];

  return (
    <section id="local" className={styles.map}>

      <div className={styles.content}>
        <div className={styles.contact}>
          {contact.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <div className={styles.header}>
                  <span className="material-icons">{item.icon}</span>{" "}
                  <h3 className={styles.title}>{item.title}</h3>
                </div>
                <p>{item.paragraph}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.mapContainer}>
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.3449555720804!2d-49.49824611832781!3d-28.94749131230777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95222f04efffff05%3A0xa8a191f693ac32b8!2sIFSC%20C%C3%A2mpus%20Ararangu%C3%A1!5e0!3m2!1spt-BR!2sus!4v1679456725717!5m2!1spt-BR!2sus"
            loading="lazy"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Where;
