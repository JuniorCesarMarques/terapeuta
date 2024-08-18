import React, { useState, useEffect } from "react";
import styles from "./HeadlineSection.module.css";
import img from '../../assets/headlineSction.svg';

const HeadlineSection = () => {

  return (
    <div className={styles.container}>
      <h2>Promoção por tempo limitado</h2>
      <div>
        <h1>
          Canva para oraculistas
        </h1>
        <p>
          O maior pack de Artes Editáveis para Oraculistas.
        </p>
      </div>
      <img src={img} />
    </div>
  );
};

export default HeadlineSection;
