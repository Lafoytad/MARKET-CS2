import styles from "./ItemPrice.module.scss";
import Image from "next/image";
import React, { useState } from "react";
import Tooltip from "@/app/components/atoms/tooltip/Tooltip";

export default function ItemPrice(props) {
  // props.path/name/price/info1/info2/info3/rarity/collection/type/width/discount?/X/items/icon
  const width = props.width || "160";

  const [isHovered, setIsHovered] = useState(false);

  const color = (rarity) => {
    const rarityColors = {
      0: "#7696ea59",
      1: "#3461fd59",
      2: "#ab4af559",
      3: "#ff1fe959",
      4: "#ff444459",
      5: "#ffe81959",
      6: "#ff8e3559",
    };
    const backgroundColor = rarityColors[rarity] || "#f1f1f159";
    return backgroundColor;
  };

  return (
    <div
      style={{
        width: width,
        height: width * 1.46875,
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
          }}
          className={styles.topBack}
        ></div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.text}>
          {props.type} | {props.name}
        </p>
        <div
          onMouseLeave={() => setIsHovered(false)}
          className={styles.wrapper}
        >
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
          <div
            onMouseEnter={() => setIsHovered(true)}
            className={styles.info}
          ></div>
        </div>
      </div>
      <Tooltip
        isHovered={isHovered}
        width={props.width}
        X={props.X}
        Y={props.Y} //NEW
        name={props.name}
        collection={props.collection}
        type={props.type}
        rarity={props.rarity}
        info1={props.info1}
        info2={props.info2}
        info3={props.info3}
        items={props.items}
        icon={props.icon}
      />
    </div>
  );
}
