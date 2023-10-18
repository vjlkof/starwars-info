import styles from "./detailPage.module.css";
import TitlePage from "@/app/components/TitlePage/TitlePage.jsx";

export default function DetailPage({ title, data }) {
  return (
    <>
      <TitlePage name={title} />
      <article className={styles.dataContainer}>
        <div className={styles.leftSide}>
          <h4>{data.name.toUpperCase()}</h4>
        </div>
        <div className={styles.rightSide}>
          {Object.entries(data).map(
            ([key, value]) =>
              key !== "name" && (
                <div key={key}>
                  <strong>{key.toUpperCase()}: </strong>
                  <span>{value}</span>
                </div>
              )
          )}
        </div>
      </article>
    </>
  );
}
