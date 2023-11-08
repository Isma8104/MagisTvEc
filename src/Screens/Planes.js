import React from "react";
import styles from "./Planes.module.css";
import Button from "../Components/Button";
import icono1 from "../assets/tv.svg";
import icono2 from "../assets/eye.svg";
import icono3 from "../assets/hd.svg";
import icono4 from "../assets/movie.svg";
import icono5 from "../assets/18.svg";
// Supongamos que tienes un arreglo de suscripciones

const subscriptions = [
  {
    name: "1 MES",
    price: "$9.99/mes",
    features: [
      { icon: icono1, text: "3 Dispositivos" },
      { icon: icono2, text: "+ 1000 Canales" },
      { icon: icono3, text: "Calidad HD/FHD" },
      { icon: icono4, text: "Series y Peliculas" },
      { icon: icono5, text: "Contenido +18" },
    ],
  },
  {
    name: "3 MESES",
    price: "$19.99/mes",
    features: [
      { icon: icono1, text: "3 Dispositivos" },
      { icon: icono2, text: "+ 1000 Canales" },
      { icon: icono3, text: "Calidad HD/FHD" },
      { icon: icono4, text: "Series y Peliculas" },
      { icon: icono5, text: "Contenido +18" },
    ],
  },
  {
    name: "6 MESES + 1 MES GRATIS",
    price: "$29.99/mes",
    features: [
      { icon: icono1, text: "3 Dispositivos" },
      { icon: icono2, text: "+ 1000 Canales" },
      { icon: icono3, text: "Calidad HD/FHD" },
      { icon: icono4, text: "Series y Peliculas" },
      { icon: icono5, text: "Contenido +18" },
    ],
  },
  {
    name: "12 MESES + 2 MES GRATIS",
    price: "$86.99/mes",
    features: [
      { icon: icono1, text: "3 Dispositivos" },
      { icon: icono2, text: "+ 1000 Canales" },
      { icon: icono3, text: "Calidad HD/FHD" },
      { icon: icono4, text: "Series y Peliculas" },
      { icon: icono5, text: "Contenido +18" },
    ],
  },
];
const Planes = () => {
  return (
    <div name="Planes" className={styles.planes}>
      <div className={styles.plansHeader}>
        <h2 className={styles.title2}>Precios y Planes de Magis TV</h2>
      </div>
      <div className={styles.subscriptionsContainer}>
        {subscriptions.map((subscription, index) => (
          <div key={index} className={styles.subscription}>
            <h2>{subscription.name}</h2>
            <p>{subscription.price}</p>
            <ul className={styles.features}>
              {subscription.features.map((feature, featureIndex) => (
                <li key={featureIndex}>
                  <img src={feature.icon} alt="Icono" style={{ width: "20px" }} /> {feature.text}
                </li>
              ))}
            </ul>
            <Button text="Comprar" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planes;