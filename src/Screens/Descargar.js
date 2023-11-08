import React from "react";
import styles from "./Descargar.module.css";
import SvgAndroid from "../assets/android.svg"; // Ruta de la imagen del icono
import SvgSmarthphone from "../assets/smartphone.svg"; // Ruta de la imagen del icono
import Button2 from "../Components/Button2";

const Descargar = () => {
  return (
    <div name="Descargar" className={styles.container}>
      <h2 className={styles.title}>Descargar la Aplicación</h2>

      <div className={styles.deviceContainer}>
        {/* Recuadro 1: Android TV/Fire TV */}
        <div className={styles.deviceBox}>
          <div className={styles.deviceContent}>
          <h2 className={styles.title2}>Televisores<br/><span>Android Tv-Fire Tv</span></h2>
            <img src={SvgAndroid} alt="Icono" className={styles.deviceImage} />
            <Button2 to="https://bit.ly/magis-tv-v5100">Descargar</Button2>
          </div>
        </div>
        {/* Recuadro 2: Smartphone */}
        <div className={styles.deviceBox}>
          <div className={styles.deviceContent}>
          <h2>Smartphone<br/><span>Android</span></h2>
            <img src={SvgSmarthphone} alt="Icono" className={styles.deviceImage} />
            <Button2 to="https://bit.ly/magis-phone-v5100">Descargar</Button2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descargar;