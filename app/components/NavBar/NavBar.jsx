"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navBar.module.css";
import Tooltip from "@/app/components/Tooltip/Tooltip.jsx";

export default function NavBar() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleFavoritesClick = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <nav className={styles.navContainer} onMouseLeave={handleMouseLeave}>
      <div className={styles.menuToggle} onClick={() => toggleMenu()}>
        <Image
          src="/menu_icon.svg"
          alt="Hamburguer"
          className={styles.starWarsLogo}
          width={40}
          height={40}
          priority
        />
      </div>
      <div className={styles.logo}>
        <a href="/">
          <Image
            src="/Star_Wars_Logo_nav.svg"
            alt="Star wars Logo"
            className={styles.starWarsLogo}
            width={100}
            height={50}
            priority
          />
        </a>
      </div>
      <div
        className={[
          styles.navData,
          `${menuVisible ? styles.navDataMob : ""}`,
        ].join(" ")}
      >
        <ul
          className={[
            styles.navOptions,
            `${menuVisible ? styles.navOptionsMob : ""}`,
          ].join(" ")}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/personajes">Personajes</Link>
          </li>
          <li>
            <Link href="/peliculas">Películas</Link>
          </li>
          <li>
            <Link href="/naves">Naves</Link>
          </li>
          <li>
            <Link href="/planetas">Planetas</Link>
          </li>
        </ul>
        <div
          className={[
            styles.favorites,
            `${menuVisible ? styles.favoritesMob : ""}`,
          ].join(" ")}
          onClick={() => handleFavoritesClick()}
        >
          Favoritos
        </div>
      </div>
      {showTooltip && <Tooltip />}
    </nav>
  );
}
