import styles from "./StoreHeader.module.scss";
import MainHeaderText from "../../atoms/mainHeaderText/mainHeaderText";

export default function MainHeader() {
  return (
    <div className={styles.wrapper}>
      <ul>
        <MainHeaderText text={"Главная"} url={"/store/home"} />
        <MainHeaderText text={"Общее"} url={"/store/market"} />
        <MainHeaderText text={"Копенгаген-2024"} url={"/store/copenhagen"} />
        <MainHeaderText text={"Торговая площадка"} url={"/store/community"} />
        <MainHeaderText text={"Инструменты"} url={"/store/general"} />
      </ul>
    </div>
  );
}
