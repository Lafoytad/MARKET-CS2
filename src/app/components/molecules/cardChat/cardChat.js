import styles from "./cardChat.module.scss";

import Image from "next/image";

export default function CardChat() {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <Image width={30} height={30} src={"/icons/flair.png"}></Image>
        <p className={styles.title}>чат</p>
        <p className={styles.buy}>Купить!</p>
      </div>

      <div className={styles.wrap}>
        <div className={styles.row}>
          <Image
            width={40}
            height={40}
            src={
              "/econ/weapon_cases/crate_sticker_pack_cph2024_group_champions_png.png"
            }
          ></Image>
          <p className={styles.text}>AWP | ГАДЮКА</p>
          <p className={styles.price}>$1.42</p>
        </div>
      </div>
    </div>
  );
}
