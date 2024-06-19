import styles from "./Header.module.scss";
import HeaderLeft from "@/app/components/molecules/header/left/headerLeft";
import HeaderMiddle from "@/app/components/molecules/header/middle/HeaderMiddle";

export default function Home() {
  return (
    <header className={styles.header}>
      <div className={styles.background}>
        <HeaderMiddle />
        <HeaderLeft />
      </div>
    </header>
  );
}
