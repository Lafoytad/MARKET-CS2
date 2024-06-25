"use client";

import { usePathname } from "next/navigation";
import styles from "./mainHeaderText.module.scss";
import Link from "next/link";

export default function MainHeaderText(props) {
  const pathname = usePathname();

  return (
    <li className={styles.item}>
      <Link
        className={pathname == props.url ? styles.active : ""}
        href={props.url}
      >
        {props.text}
      </Link>
    </li>
  );
}
