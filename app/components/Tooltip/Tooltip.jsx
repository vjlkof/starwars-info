"use client";
import styles from "./tooltip.module.css";
import { useFavContext } from "@/app/contexts/FavContext.js";

export default function Tooltip() {
  const { favorites, updateFavorites } = useFavContext();

  return (
    <div className={styles.listContainer}>
      {favorites.map((item, index) => (
        <div key={index} className={styles.rowLine}>
          <strong>{item} </strong>
          <button
            className={styles.favButton}
            type="button"
            onClick={() => updateFavorites(item)}
          >
            {favorites.includes(item) ? "❤️" : "🤍"}
          </button>
        </div>
      ))}
    </div>
  );
}
