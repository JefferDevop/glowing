import styles from "./Contact.module.scss";
import { FooterApp } from "../FooterApp";

export function Contact() {
  return (
    <>
      <div className={styles.container}>
        <h1>Glowing</h1>
        <div className={styles.phone}>
          <h5>Líneas de atención</h5>
          <ul>
            <li>(+57) 310 7640196</li>
          </ul>
        </div>

        <div className={styles.adress}>
          <h5>Ubicación:</h5>
          <p>
          San Andresito Sur piso 1 local 1-105
          </p>
        </div>
      </div>
      <FooterApp />
    </>
  );
}
