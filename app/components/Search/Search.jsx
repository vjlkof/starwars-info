"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./search.module.css";
import searchIcon from "@/public/search.svg";
import closeIcon from "@/public/close.svg";
import { getData } from "@/app/utils/apiCall.js";

export default function Search({
  url,
  resource,
  originalData,
  setData,
  setParam,
}) {
  const [search, setSearch] = useState(false);
  const [searchedText, setSearchedText] = useState("");
  const [loading, setLoading] = useState(false);

  async function reloadOriginalData() {
    setData([...originalData]);
    setSearch((search) => !search);
  }

  async function backendSearch(param = undefined) {
    setLoading(true);
    try {
      const { next: nextPage, results } = await getData(resource, url, param);
      setData([...results]);
      setParam(nextPage);
    } catch (error) {
      throw new Error("Error getting data");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className={styles.searchContainer}>
        {!search && (
          <Image
            src={!search ? searchIcon : closeIcon}
            alt="Search Icon"
            className={styles.searchIcon}
            width={40}
            height={40}
            onClick={() => setSearch((search) => !search)}
          />
        )}
        {search && (
          <>
            <button
              className={styles.cancelButton}
              type="button"
              onClick={() => reloadOriginalData()}
            >
              Cancelar
            </button>
            <input
              className={styles.search}
              type="search"
              placeholder="Puedes buscar por nombre"
              onChange={(event) => setSearchedText(event.target.value)}
            />
            {loading ? (
              <div className={styles.loading}>Cargando...</div>
            ) : (
              <button
                className={styles.searchButton}
                type="button"
                onClick={() => backendSearch(`search=${searchedText}`)}
              >
                Buscar
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
}
