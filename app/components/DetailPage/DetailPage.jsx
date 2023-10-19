"use client";
import styles from "./detailPage.module.css";
import TitlePage from "@/app/components/TitlePage/TitlePage.jsx";
import { useFavContext } from "@/app/contexts/FavContext.js";

export default function DetailPage({ title, data, favorite }) {
  const { favorites, updateFavorites } = useFavContext();

  return (
    <>
      <TitlePage name={title} />
      <article className={styles.dataContainer}>
        <div className={styles.leftSide}>
          <h4>{data.name.toUpperCase()}</h4>
        </div>
        <div className={styles.rightSide}>
          <button
            className={styles.favButton}
            type="button"
            onClick={() => updateFavorites(data.name)}
          >
            {favorites.includes(data.name) ? "❤️" : "🤍"}
          </button>
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
