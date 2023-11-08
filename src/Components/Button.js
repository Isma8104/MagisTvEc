import React from "react";
import styles from"./Button.module.css"; // Importa el archivo CSS

const handleButtonClick = () => {
    window.location.href = "https://wa.link/v6r462"; // Reemplaza con la URL de tu página de Facebook
  };
const Button = ({ text}) => {
  return (
    <button className={styles.button} onClick={handleButtonClick} >
      {text}
    </button>
  );
};

export default Button;