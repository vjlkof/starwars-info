"use client";
import { useState } from "react";
import styles from "./pageData.module.css";
import CardList from "@/app/components/CardList/CardList.jsx";
import LoadMore from "@/app/components/LoadMore/LoadMore.jsx";
import TitlePage from "@/app/components/TitlePage/TitlePage.jsx";
import Search from "@/app/components/Search/Search.jsx";

export default function PageData({
  title,
  service,
  backendData,
  url,
  paramData,
  route,
}) {
  const [data, setData] = useState(backendData);
  const [param, setParam] = useState(paramData);

  return (
    <>
      <TitlePage name={title} />
      <div className={styles.search}>
        <Search
          url={url}
          service={service}
          originalData={backendData}
          setData={setData}
          setParam={setParam}
        />
      </div>
      <div className={styles.dataContainer}>
        <CardList route={route} items={data} />
        <LoadMore
          url={url}
          param={param}
          service={service}
          setData={setData}
          setParam={setParam}
        />
      </div>
    </>
  );
}
