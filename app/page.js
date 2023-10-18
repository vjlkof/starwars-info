import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.logo}>
        <Image
          src="/Star_Wars_Logo.svg"
          alt="Star wars Logo"
          className={styles.starWarsLogo}
          width={300}
          height={300}
          priority
        />
      </div>
      <p className={styles.information}>
        Esta página es una UI que sirve de wrapper de la swapi API. Esta te
        permite buscar, filtrar y guardar favoritos de personajes, películas,
        naves y planetas de todas las películas cargadas en dicha API.
      </p>
    </div>
  );
}
