import React, { useState, useEffect } from "react";
import styles from "./VideoSection.module.css";

const VideoSection = () => {

const [windowWidth, setWindowWidth] = useState(window.innerWidth);


 const handleResize = () => {
  setWindowWidth(window.innerWidth <= 767 ? window.innerWidth - 60 : window.innerWidth >= 1000 ? 1000 - 450 : window.innerWidth - 450)
 }

 useEffect(() => {
  // Atualiza a largura inicialmente
  handleResize();
  
  // Adiciona o listener para redimensionamento
  window.addEventListener("resize", handleResize);

  // Remove o listener quando o componente for desmontado
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

const heigt = windowWidth * 9 / 16

  return (
    <div className={styles.container}>
      <div>
        <h1>
          Canva para <br /> terapeutas
        </h1>
        <p>
          O maior pack de Artes Editáveis para <br /> Terapeutas e Oraculistas.
        </p>
      </div>
      <iframe
        width={windowWidth}
        height={heigt}
        src="https://www.youtube.com/embed/4MeMEzcpNn4?si=UsX-HHUSXHq8fCpb"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
