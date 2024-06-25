import styles from "./inventoryHeader.module.scss";
import MainHeaderText from "../../atoms/mainHeaderText/mainHeaderText";

export default function MainHeader() {
  return (
    <div className={styles.wrapper}>
      <ul>
        <MainHeaderText text={"Всё"} url={"/inventory/all"} />
        <MainHeaderText text={"Экипировка"} url={"/inventory/equipment"} />
      </ul>
    </div>
  );
}
