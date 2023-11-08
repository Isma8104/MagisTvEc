import React from 'react';
import styles from './Contact.module.css';
import ImgMapaEc from "../assets/MapaEc.png"; // Ruta de la imagen del icono
import Button2 from "../Components/Button2";

const Contact = () => {
  return (
    <div name="Contact" className={styles['contact-info']}>
      <div className={styles.column}>
        <h2>Plataformas Compatibles</h2>
        <ul>
          <li>Móviles</li>
          <li>SMART TV</li>
          <li>TV Box</li>
          <li>PC & MAC</li>
          <li>Fire TV Stick</li>
        </ul>
      </div>
      <div className={styles.column}>
  <h2>Ciudades en Ecuador</h2>
  <ul className={styles.twocolumnslist}>
  <li>Cuenca</li>
  <li>Guayaquil</li>
  <li>Quito</li>
  <li>Santo Domingo</li>
  <li>Ambato</li>
  <li>Manta</li>
  <li>Portoviejo</li>
  <li>Loja</li>
  <li>Riobamba</li>
  <li>Machala</li>
  <li>Ibarra</li>
  <li>Quevedo</li>
  <li>Latacunga</li>
  <li>Tulcán</li>
  <li>Babahoyo</li>
  <li>Machachi</li>
  <li>Puyo</li>
  <li>Santa Elena</li>
  <li>Guaranda</li>
  </ul>
</div>
      <div className={styles.column}>
        <img src={ImgMapaEc} alt="Icono" className={styles.deviceImage} />
      </div>
      <div className={styles.column}>
      <Button2 to="https://wa.link/v6r462">Prueba Gratis</Button2>
      <Button2 to="https://wa.link/v6r462">Contratar Ahora</Button2>
      </div>
    </div>
  );
};

export default Contact;