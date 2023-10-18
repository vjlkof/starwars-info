"use client";
import { useState, useEffect } from "react";
import styles from "./character.module.css";
import CardList from "@/app/components/CardList/CardList.jsx";
import LoadMore from "@/app/components/LoadMore/LoadMore.jsx";
import TitlePage from "@/app/components/TitlePage/TitlePage.jsx";
import Search from "@/app/components/Search/Search.jsx";
import SideBar from "@/app/components/SideBar/SideBar.jsx";

export default function Character({
  title,
  resource,
  charactersData,
  url,
  paramData,
}) {
  const [characters, setCharacters] = useState(charactersData);
  const [param, setParam] = useState(paramData);
  const [visualizedCharacters, setVisualizedCharacters] = useState(characters);

  return (
    <>
      <TitlePage name={title} />
      <div className={styles.search}>
        <Search
          url={url}
          resource={resource}
          originalData={charactersData}
          setData={setCharacters}
          setParam={setParam}
        />
      </div>
      <div className={styles.pageContainer}>
        <SideBar
          characters={characters}
          setVisualizedCharacters={setVisualizedCharacters}
        />
        <div className={styles.content}>
          <div className={styles.dataContainer}>
            <CardList path={title.toLowerCase()} items={visualizedCharacters} />
            <LoadMore
              url={url}
              param={param}
              resource={resource}
              setData={setCharacters}
              setParam={setParam}
            />
          </div>
        </div>
      </div>
    </>
  );
}
