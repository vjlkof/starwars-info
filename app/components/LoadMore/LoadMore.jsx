"use client";
import { useState } from "react";
import styles from "./loadMore.module.css";
import { urlBuilder } from "@/app/utils/urlBuilder.js";
import { getData } from "@/app/utils/apiCall.js";

export default function LoadMore({ url, param, service, setData, setParam }) {
  async function loadMoreData() {
    setLoading(true);
    try {
      const { next: nextPage, results } = await getData(
        service,
        urlBuilder(service, null, param)
      );
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
