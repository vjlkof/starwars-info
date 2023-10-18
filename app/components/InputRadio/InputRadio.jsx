"use client";
import styles from "./inputRadio.module.css";

export default function InputRadio({ gender, section, label, setGender }) {
  return (
    <div className={styles.dataForFilter}>
      <input
        type="radio"
        id={gender}
        name={section}
        value={gender}
        onChange={() => setGender(gender === "no-selected" ? null : gender)}
      />
      <label htmlFor={gender}>{label}</label>
    </div>
  );
}
