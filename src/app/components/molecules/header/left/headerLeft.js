"use client";

import styles from "./headerLeft.module.scss";
import { useRouter } from "next/navigation";

export default function HeaderLeft() {
  const router = useRouter();

  return (
    <div className={styles.icons}>
      <ul>
        <li onClick={() => router.push("/")} className={styles.home}></li>
        <li className={styles.home}></li>
      </ul>
    </div>
  );
}
