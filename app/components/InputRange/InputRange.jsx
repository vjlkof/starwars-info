"use client";
import styles from "./inputRange.module.css";

export default function InputNumber({
  min,
  minPlaceholder,
  max,
  maxPlaceholder,
  setFilterHeight,
}) {
  return (
    <div className={styles.dataForFilter}>
      <input
        type="number"
        min={min}
        max={max}
        step="1"
        placeholder={minPlaceholder}
        onChange={(event) =>
          setFilterHeight((current) =>
            event.target.value !== ""
              ? { ...current, min: event.target.value }
              : { ...current, min: null }
          )
        }
      />
      <input
        type="number"
        min={min}
        max={max}
        step="1"
        placeholder={maxPlaceholder}
        onChange={(event) =>
          setFilterHeight((current) =>
            event.target.value !== ""
              ? { ...current, max: event.target.value }
              : { ...current, max: null }
          )
        }
      />
    </div>
  );
}
