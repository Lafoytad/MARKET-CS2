import styles from "./Home.module.scss";
import MainHeader from "@/app/components/molecules/storeHeader/StoreHeader";
import Weekly from "@/app/components/molecules/weekly/Weekly";
import NewsAndPopulars from "@/app/components/molecules/newsAndPopulars/NewsAndPopulars";

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.fone}></div>
      <MainHeader />
      <div className={styles.column}>
        <Weekly />

        <NewsAndPopulars
          path={"/store/market"}
          img={"/background/store_home_coupon.png"}
          title={"Новое и популярное"}
          item={"items"}
        />

        <NewsAndPopulars
          path={"/store/copenhagen"}
          img={"/background/store_home_tournament.png"}
          title={"Копенгаген-2024"}
          item={"capsules"}
        />
      </div>
    </div>
  );
}
