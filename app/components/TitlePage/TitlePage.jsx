import styles from "./titlePage.module.css";

export default function TitlePage({ name }) {
  return <h1 className={styles.title}>{name}</h1>;
}
