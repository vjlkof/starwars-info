"use client";
import { createContext, useContext, useState, useEffect } from "react";

const FavContext = createContext();

const FavProvider = ({ children }) => {
  useEffect(() => {
    setFavorites(
      localStorage.getItem("favorites")
        ? JSON.parse(localStorage.getItem("favorites"))
        : []
    );
  }, []);

  const [favorites, setFavorites] = useState([]);

  async function updateFavorites(value) {
    const savedFavorites = favorites.includes(value)
      ? favorites.filter((favorite) => favorite !== value)
      : [...favorites, value];
    setFavorites(() => [...savedFavorites]);
    localStorage.setItem("favorites", JSON.stringify(savedFavorites));
  }

  return (
    <FavContext.Provider value={{ favorites, updateFavorites }}>
      {children}
    </FavContext.Provider>
  );
};

export { FavProvider };
export const useFavContext = () => useContext(FavContext);
