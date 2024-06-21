import Link from "next/link";
import styles from "./HeaderMiddle.module.scss";

export default function HeaderMiddle() {
  return (
    <ul className={styles.ul}>
      <li>
        <Link href="/inventory">Инвентарь</Link>
        <video className={styles.video} autoPlay muted loop>
          <source src="/video/GlareHover.mp4" type="video/mp4" />
        </video>
      </li>
      <li>
        <Link href="/store/home">Магазин</Link>
        <video className={styles.video} autoPlay muted loop>
          <source src="/video/GlareHover.mp4" type="video/mp4" />
        </video>
      </li>
      <li>
        <Link href="/news">Новости</Link>
        <video className={styles.video} autoPlay muted loop>
          <source src="/video/GlareHover.mp4" type="video/mp4" />
        </video>
      </li>
    </ul>
  );
}
