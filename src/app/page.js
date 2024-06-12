"use client"; // 1

import React, { useState } from "react"; // 1
import "./globals.css";
import styles from "./page.module.scss";
import Image from "next/image"; // 1
import home from "../../public/icons/home_icon_png.png"; // 1
import homeHover from "../../public/icons/home_icon_pngHover.png"; // 1
import { useRouter } from "next/navigation"; // 1

export default function Home() {
  const [isHovered, setIsHovered] = useState(false); // 1
  const router = useRouter(); // 1

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <ul>
          <li>Инвентарь</li>
          <li>Магазин</li>
          <li>Новости</li>
        </ul>
      </header>

      <div className={styles.icons}>
        <ul>
          <li
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            onClick={() => router.push("/")}
          >
            <Image src={isHovered ? homeHover : home} alt="Home" />
          </li>
          <li>
            <Image src={home} alt="Home"></Image>
          </li>
        </ul>
      </div>

      <aside className={styles.aside}></aside>

      <section className={styles.section}>
        <aside className={styles.one}>dxvdx</aside>
        <aside className={styles.two}>ddd</aside>
      </section>
    </main>
  );
}
