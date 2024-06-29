import styles from "./Item.module.scss";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Tooltip from "@/app/components/atoms/tooltip/Tooltip";

export default function ItemPrice(props) {
  // props.path/name/price/info1/info2/info3/rarity/collection/type/width/discount?/X/items/icon
  const width = props.width || "160";

  const [isHovered, setIsHovered] = useState(false);

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
    const backgroundColor = rarityColors[rarity] || "#f1f1f1";
    return backgroundColor;
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: width,
        height: width,
      }}
      className={styles.item}
    >
      <div
        style={{
          borderBottom: `8px solid ${color(props.rarity)}`,
        }}
        className={styles.top}
      >
        <Image
          width={500}
          height={500}
          className={styles.imgHover}
          src={props.path}
          alt="Picture"
        />{" "}
        <div className={styles.topBack}></div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.title}>{props.type}</p>
        <p className={styles.text}>{props.name}</p>
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
        left={-30}
        buttom={1}
      />
    </div>
  );
}
