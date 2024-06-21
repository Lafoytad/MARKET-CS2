import styles from "./NewsAndPopulars.module.scss";
import ItemPrice from "../../atoms/item/ItemPrice";
import Image from "next/image";
import right from "/public/icons/right.png";

export default function NewsAndPopulars(props) {
  return (
    <section
      style={{ background: `url(${props.img})` }}
      className={styles.container}
    >
      <div className={styles.more}>
        <p className={styles.text}>Ещё</p>
        <Image src={right} alt="help" />
        {props.img == "/background/store_home_tournament.png" ? (
          <Image src={right} alt="help" />
        ) : (
          ""
        )}
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{props.title}</p>
        {props.img == "/background/store_home_coupon.png" ? (
          <div className={styles.wrapper}>
            <ItemPrice price={0.99} />
            <ItemPrice price={0.99} />
            <ItemPrice price={0.99} />
            <ItemPrice price={0.99} />
            <ItemPrice price={0.99} />
          </div>
        ) : (
          ""
        )}
        {props.img == "/background/store_home_tournament.png" ? (
          <div className={styles.wrapper}>
            <ItemPrice discount={100} price={0.99} />
            <ItemPrice discount={75} price={0.99} />
            <ItemPrice discount={75} price={0.99} />
            <ItemPrice discount={50} price={0.99} />
            <ItemPrice discount={50} price={0.99} />
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
