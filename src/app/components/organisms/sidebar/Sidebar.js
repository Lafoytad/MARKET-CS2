import CardBuy from "../../molecules/cardBuy/cardBuy";
import CardChat from "../../molecules/cardChat/cardChat";
import CardPurchase from "../../molecules/сardPurchase/сardPurchase";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <div className={styles.content}>
        <div className={styles.background}></div>
        <div className={styles.gallery}>
          <CardBuy />
          <CardPurchase />
          <CardChat />
        </div>
      </div>
    </aside>
  );
}
