import styles from "./ItemPrice.module.scss";
import Image from "next/image";
import Picture from "/public/background/static.jpg";

export default function ItemPrice(props) {
  return (
    <div className={styles.item}>
      <div className={styles.top}>
        <Image className={styles.imgHover} src={Picture} alt="Picture" />{" "}
        {/* тут должна быть картинка вместо Picture*/}
        <div className={styles.topBack}></div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.text}>Капсула с наклейками 'Засада'</p>
        <div className={styles.wrapper}>
          {props.discount ? (
            <div className={styles.discount}>
              <p className={styles.percent}>{props.discount}%</p>
              <div className={styles.column}>
                <p className={styles.oldPrice}>${props.price}</p>
                <p className={styles.newPrice}>
                  $
                  {(props.price - props.price * (props.discount / 100)).toFixed(
                    2
                  )}
                </p>
              </div>
            </div>
          ) : (
            <p className={styles.price}>${props.price}</p>
          )}
          <Image width={10} height={18} src="" alt="help" />
        </div>
      </div>
    </div>
  );
}
