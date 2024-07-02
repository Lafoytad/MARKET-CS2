import styles from "./inventoryHeader.module.scss";
import MainHeaderText from "../../atoms/mainHeaderText/mainHeaderText";

export default function MainHeader() {
  return (
    <div className={styles.wrapper}>
      <ul>
        <MainHeaderText text={"Всё"} url={"/inventory/all"} />
        <MainHeaderText text={"Экипировка"} url={"/inventory/equipment"} />
        <MainHeaderText text={"Кейсы"} url={"/inventory/cases"} />
        <MainHeaderText text={"Наклейки"} url={"/inventory/stickers"} />
      </ul>
    </div>
  );
}
