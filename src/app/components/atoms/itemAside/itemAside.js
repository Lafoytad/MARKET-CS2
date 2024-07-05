import styles from "./itemAside.module.scss";
import Image from "next/image";

export default function ItemPrice(props) {
  //* props.path/name/price/rarity/width?

  const width = props.width || 160;

  const color = (rarity) => {
    const rarityColors = {
      0: "#7696ea",
      1: "#3461fd",
      2: "#ab4af5",
      3: "#ff1fe9",
      4: "#ff4444",
      5: "#ffe819",
      6: "#ff8e35",
    };
    const backgroundColor = rarityColors[rarity] || "#f1f1f159";
    return backgroundColor;
  };

  return (
    <div
      style={{
        width: width,
        height: width - 15,
      }}
      className={styles.item}
    >
      <div className={styles.top}>
        <Image
          width={500}
          height={500}
          className={styles.imgHover}
          src={props.path}
          alt="Picture"
        />{" "}
        <div
          style={{
            backgroundImage: `url(${props.path})`,
            backgroundColor: color(props.rarity),
            ...(props.caseOn && {
              left: "50%",
              transform: "scale(3)",
            }),
          }}
          className={styles.topBack}
        ></div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.text}>
          {props.type} {props.name ? ` | ${props.name}` : ""}
        </p>
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
          ) : props.textUrl || props.url ? (
            <div>
              <p className={styles.price}>${props.price}</p>
              <a
                onClick={(event) => event.stopPropagation()}
                href={props.url}
                target="_blank"
              >
                <p className={styles.url}>{props.textUrl}</p>
              </a>
            </div>
          ) : (
            <p className={styles.price}>${props.price}</p>
          )}
        </div>
      </div>
    </div>
  );
}
