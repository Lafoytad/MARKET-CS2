"use client";

import styles from "./headerLeft.module.scss";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function HeaderLeft() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={styles.icons}>
      <ul>
        <li
          onClick={() => router.push("/")}
          className={pathname == "/" ? styles.activeHome : styles.home}
        ></li>
      </ul>
    </div>
  );
}
