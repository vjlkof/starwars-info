"use client";
import { useState } from "react";
import styles from "./loadMore.module.css";
import { getData } from "@/app/utils/apiCall.js";

export default function LoadMore({ url, param, resource, setData, setParam }) {
  async function loadMoreData() {
    setLoading(true);
    try {
      const { next: nextPage, results } = await getData(resource, url, param);
      setData((data) => [...data, ...results]);
      setParam(nextPage);
    } catch (error) {
      throw new Error("Error getting data");
    } finally {
      setLoading(false);
    }
  }

  const [loading, setLoading] = useState(false);

  return (
    <>
      {param &&
        (loading ? (
          <div className={styles.loading}>Cargando...</div>
        ) : (
          <button
            className={styles.loadMore}
            type="button"
            onClick={() => loadMoreData()}
          >
            Cargar Mas <span>▼</span>
          </button>
        ))}
    </>
  );
}
