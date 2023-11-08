import React from "react";
import { Link } from "react-scroll";
import styles from "./Inicio.module.css";
import backgroundImage from "../assets/movie1.png"; // Ruta de la imagen

const Inicio = () => {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover", // Para ajustar la imagen al tamaño del contenedor
    backgroundRepeat: "no-repeat", // Evita la repetición de la imagen
  };
  return (
    <div name="Inicio" className={styles.inicio}  style={backgroundStyles}>
      <div className={styles.titleContainer}>
        <p>
          <b> Magis Tv</b>
        </p>
        <p>
          Toda tu diversión <br />
          <b>en un solo lugar</b>
        </p>
      </div>
      <div className={styles.ctaContainer}>
        <Link
          to="Planes"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Contratalo ya!
        </Link>
        <Link
          to="Descargar"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
