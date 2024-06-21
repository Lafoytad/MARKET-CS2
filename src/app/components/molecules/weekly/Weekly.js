import styles from "./Weekly.module.scss";
import Image from "next/image";

export default function Weekly() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <div className={styles.fone}></div>
          <div className={styles.image}></div>
          <p className={styles.text}>Запечатанный графити | Коронуйте</p>
        </div>
        <div className={styles.item}>
          <div className={styles.fone}></div>
          <div className={styles.image}></div>
          <p className={styles.text}>Запечатанный графити | Коронуйте</p>
        </div>
        <div className={styles.item}>
          <div className={styles.fone}></div>
          <div className={styles.image}></div>
          <p className={styles.text}>Запечатанный графити | Коронуйте</p>
        </div>
        <div className={styles.item}>
          <div className={styles.fone}></div>
          <div className={styles.image}></div>
          <p className={styles.text}>Запечатанный графити | Коронуйте</p>
        </div>
      </div>
      <div className={styles.column}>
        <p className={styles.title}>Еженедельный набор</p>
        <p className={styles.subtitle}>Еженедельные награды получены</p>
        <p className={styles.txt}>
          Вы получите еженедельный набор, когда повысите свой ранг за очки опыта
        </p>
        <div className={styles.wrap}>
          <Image width={24} height={32} src="" />
          <Image width={180} height={8} src="" alt="Picture" />
          <Image width={26} height={35} src="" alt="Picture" />
        </div>
      </div>
    </section>
  );
}
