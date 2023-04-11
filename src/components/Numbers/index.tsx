import * as React from "react";
import Button from "../Button";
import * as styles from "./styles.module.scss";

function Numbers() {
  return (
    <div id="sobre" className={styles.wrapper}>
      <div className={styles.blocks}>
        <div className={styles.block1}>
          <div className={`${styles.card} ${styles.first}`}>
            <div className={styles.number}>16h</div>
            <div className="card-home-about-text accent">Programação</div>
          </div>
          <div className={styles.card}>
            <div className={styles.number}>6</div>
            <div className="card-home-about-text">Patrocinadores</div>
          </div>
        </div>
        <div className={styles.block2}>
          <div className={styles.card}>
            <div className={styles.number}>10</div>
            <div className="card-home-about-text">Palestras</div>
          </div>
          <div className={styles.card}>
            <div className={styles.number}>10</div>
            <div className="card-home-about-text">Palestrantes</div>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>
          I Jornada de Fisioterapia Esportiva do Extremo Sul Catarinense
        </h2>
        <p className="paragraph home-about">
          A JOFEESC é um evento científico organizado por estudantes de
          Fisioterapia da UFSC, vinculados a Liga de Fisioterapia Desportiva
          (DESUFISIO). Tem como finalidade fomentar discussões acerca dos vários
          temas que a Fisioterapia Esportiva aborda, através do contato entre
          graduandos, mestrandos e profissionais formados por meio de palestras
          que buscam mostrar atualidades dentro da área, além de ampliar o
          conhecimento de todos sobre o assunto, permeando sobre os diversos
          esportes e suas peculiaridades dentro de um tratamento
          fisioterapeutico.
        </p>
        <Button title="Inscreva-se" to="https://www.even3.com.br/jofeesc/" />
      </div>
    </div>
  );
}

export default Numbers;
