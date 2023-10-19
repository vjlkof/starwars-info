"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navBar.module.css";
import Tooltip from "@/app/components/Tooltip/Tooltip.jsx";
import { LABELS, PAGINAS } from "@/app/constants/constants.js";

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
            <Link href={`/${PAGINAS.CHARACTERS}`}>{LABELS.CHARACTERS}</Link>
          </li>
          <li>
            <Link href={`/${PAGINAS.MOVIES}`}>{LABELS.MOVIES}</Link>
          </li>
          <li>
            <Link href={`/${PAGINAS.STARSHIPS}`}>{LABELS.STARSHIPS}</Link>
          </li>
          <li>
            <Link href={`/${PAGINAS.PLANETS}`}>{LABELS.PLANETS}</Link>
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
