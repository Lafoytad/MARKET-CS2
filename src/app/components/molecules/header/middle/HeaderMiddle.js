"use client";

import Link from "next/link";
import styles from "./HeaderMiddle.module.scss";
import { usePathname } from "next/navigation";

export default function HeaderMiddle() {
  const pathname = usePathname();

  return (
    <ul className={styles.ul}>
      <li>
        <Link
          className={pathname.startsWith("/inventory") ? styles.active : ""}
          href="/inventory/all"
        >
          Инвентарь
        </Link>
        <video className={styles.video} autoPlay muted loop>
          <source src="/video/GlareHover.mp4" type="video/mp4" />
        </video>
      </li>
      <li>
        <Link
          className={pathname.startsWith("/store") ? styles.active : ""}
          href="/store/home"
        >
          Магазин
        </Link>
        <video className={styles.video} autoPlay muted loop>
          <source src="/video/GlareHover.mp4" type="video/mp4" />
        </video>
      </li>
      <li>
        <Link
          className={pathname.startsWith("/news") ? styles.active : ""}
          href="/news"
        >
          Новости
        </Link>
        <video className={styles.video} autoPlay muted loop>
          <source src="/video/GlareHover.mp4" type="video/mp4" />
        </video>
      </li>
    </ul>
  );
}
