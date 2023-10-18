"use client";
import styles from "./page.module.css";

export default function error() {
  return (
    <div className={styles.error}>
      <h3>
        Opps no está funcionando la página por el momento. Por favor intenta en
        unos instantes.
      </h3>
    </div>
  );
}
