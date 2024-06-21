"use client";

import { usePathname } from "next/navigation";
import styles from "./MainHeader.module.scss";
import Link from "next/link";

export default function MainHeader() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className={styles.wrapper}>
      <ul>
        <li>
          <Link
            className={pathname == "/store/home" ? styles.active : ""}
            href="/store/home"
          >
            Главная
          </Link>
        </li>
        <li>
          <Link
            className={pathname == "/store/market" ? styles.active : ""}
            href="/store/market"
          >
            Общее
          </Link>
        </li>
        <li>
          <Link
            className={pathname == "/store/general" ? styles.active : ""}
            href="/store/general"
          >
            Инструменты
          </Link>
        </li>
      </ul>
    </div>
  );
}
