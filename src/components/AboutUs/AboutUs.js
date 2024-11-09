import styles from "./AboutUs.module.scss";

export function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1>Nosotros</h1>
        <p>
          ¡Bienvenidos a Distribuidora Glowing! Somos una empresa apasionada por
          la belleza y el cuidado personal, dedicada a ofrecer productos de la
          más alta calidad en cosméticos y lociones. Desde nuestros inicios,
          hemos trabajado incansablemente para convertirnos en un referente en
          el mercado, brindando a nuestros clientes lo mejor en innovación,
          eficacia y seguridad en cada uno de nuestros productos.
        </p>
      </div>

      <div className={styles.mision}>
        <h5>Misión</h5>
        <p>
          En Distribuidora Glowing, nuestra misión es realzar la belleza natural
          de cada persona, proporcionando productos que no solo embellecen, sino
          que también cuidan y protegen la piel. Nos esforzamos por ser una
          empresa confiable y accesible, ofreciendo soluciones efectivas que
          satisfagan las necesidades y expectativas de nuestros clientes.
        </p>
      </div>

      <div className={styles.vision}>
        <h5>Visión</h5>
        <p>
          Aspiramos a ser líderes en la distribución de cosméticos y lociones,
          reconocidos por nuestra calidad, compromiso con el medio ambiente y
          responsabilidad social. Queremos ser la primera opción para quienes
          buscan productos de belleza que marquen la diferencia y contribuyan al
          bienestar integral de las personas.
        </p>
      </div>

      <div className={styles.phone}>
        <h5>Líneas de atención</h5>
        <ul>
        310 7640196
        </ul>
      </div>

      <div className={styles.adress}>
        <h5>Ubicación:</h5>
        <p>
        San Andresito Sur piso 1 local 1-105
        </p>
      </div>
    </div>
  );
}
