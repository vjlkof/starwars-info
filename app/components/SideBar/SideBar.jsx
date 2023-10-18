"use client";
import { useState, useEffect } from "react";
import styles from "./sideBar.module.css";
import InputRadio from "@/app/components/InputRadio/InputRadio.jsx";
import InputRange from "@/app/components/InputRange/InputRange.jsx";
import { checkHeight } from "@/app/utils/checkHeight.js";

export default function SideBar({ characters, setVisualizedCharacters }) {
  const initializedHeight = {
    min: null,
    max: null,
  };
  const [gender, setGender] = useState(null);
  const [filterHeight, setFilterHeight] = useState(initializedHeight);
  const [genderValues, setGenderValues] = useState([]);

  useEffect(() => {
    const genderMap = new Map();
    characters.forEach((character) => {
      genderMap.set(character.gender, {
        section: "gender",
        label: character.gender.toUpperCase(),
      });
    });
    genderMap.set("no-selected", {
      section: "gender",
      label: "No seleccionado",
    });
    const genderArray = Array.from(genderMap, ([key, value]) => {
      return { ...value, key: key };
    });
    genderArray.sort((a, b) => a.label.localeCompare(b.label));
    setGenderValues(genderArray);
  }, [characters]);

  useEffect(() => {
    setVisualizedCharacters(
      characters.filter((character) => {
        if (!gender && !filterHeight.min && !filterHeight.max) {
          return true;
        }
        if (gender === character.gender || !gender) {
          return checkHeight(
            Number(character.height),
            filterHeight.min,
            filterHeight.max
          );
        }
      })
    );
  }, [gender, filterHeight, setVisualizedCharacters, characters]);

  return (
    <>
      <div className={styles.sideBar}>
        <h2 className={styles.filterTitle}>Filtros</h2>
        <div className={styles.filterInfo}>
          <div className={styles.sectionContainer}>
            <h3 className={styles.sectionFilter}>Género</h3>
            {genderValues.map((genderValue) => (
              <InputRadio
                key={genderValue.key}
                gender={genderValue.key}
                section={genderValue.section}
                label={genderValue.label}
                setGender={setGender}
              />
            ))}
          </div>
          <div className={styles.sectionContainer}>
            <h3 className={styles.sectionFilter}>Altura</h3>
            <InputRange
              min={0}
              minPlaceholder="Mínimo"
              max={500}
              maxPlaceholder="Máximo"
              setFilterHeight={setFilterHeight}
            />
          </div>
        </div>
      </div>
    </>
  );
}
