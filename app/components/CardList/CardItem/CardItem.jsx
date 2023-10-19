"use client";
import { useState } from "react";
import styles from "./cardItem.module.css";
import { useRouter } from "next/navigation";
import { useFavContext } from "@/app/contexts/FavContext.js";

export default function CardItem({ item, route }) {
  const router = useRouter();

  const { favorites, updateFavorites } = useFavContext();
  const [loading, setLoading] = useState(false);

  const handleCardClick = async () => {
    setLoading(true);
    await router.push(`/${route}/${item.id}`);
  };
  return (
    <article className={loading ? styles.cardLoading : styles.card}>
      {loading ? (
        <div className={styles.loading}>Cargando...</div>
      ) : (
        <>
          <div className={styles.flipFront}>
            <h4>{item.name.toUpperCase()}</h4>
          </div>
          <div className={styles.flipBack}>
            <div className={styles.cardInfo} onClick={() => handleCardClick()}>
              {Object.entries(item).map(([key, value]) => (
                <div key={key}>
                  <strong>{key.toUpperCase()}: </strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
          <button
            className={styles.favButton}
            type="button"
            onClick={() => updateFavorites(item.name)}
          >
            {favorites.includes(item.name) ? "❤️" : "🤍"}
          </button>
        </>
      )}
    </article>
  );
}
