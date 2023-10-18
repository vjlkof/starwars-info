"use client";
import styles from "./cardList.module.css";
import CardItem from "./CardItem/CardItem.jsx";

export default function CardList({ path, items }) {
  return (
    <div className={styles.cardList}>
      {items.map((item, index) => (
        <CardItem key={index} item={item} path={path} />
      ))}
    </div>
  );
}
