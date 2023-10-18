"use client";
import { useState } from "react";
import styles from "./pageData.module.css";
import CardList from "@/app/components/CardList/CardList.jsx";
import LoadMore from "@/app/components/LoadMore/LoadMore.jsx";
import TitlePage from "@/app/components/TitlePage/TitlePage.jsx";
import Search from "@/app/components/Search/Search.jsx";

export default function PageData({
  title,
  resource,
  backendData,
  url,
  paramData,
}) {
  const [data, setData] = useState(backendData);
  const [param, setParam] = useState(paramData);

  return (
    <>
      <TitlePage name={title} />
      <div className={styles.search}>
        <Search
          url={url}
          resource={resource}
          originalData={backendData}
          setData={setData}
          setParam={setParam}
        />
      </div>
      <div className={styles.dataContainer}>
        <CardList path={title.toLowerCase()} items={data} />
        <LoadMore
          url={url}
          param={param}
          resource={resource}
          setData={setData}
          setParam={setParam}
        />
      </div>
    </>
  );
}
