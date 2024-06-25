"use client"; //1

import styles from "./ItemPrice.module.scss";
import Image from "next/image";
import React, { useEffect, useState } from "react"; //1

export default function ItemPrice(props) {
  // props.path/name/price/rarity/width/discount/info/collection/type
  const width = props.width || "160";

  const [isHovered, setIsHovered] = useState(false); //1

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

  const colorTooltip = (rarity) => {
    const colors = {
      0: "#7696ea",
      1: "#3461fd",
      2: "#ab4af5",
      3: "#ff1fe9",
      4: "#ff4444",
      5: "#ffe819",
      6: "#ff8e35",
    };
    const color = colors[rarity] || "#f1f1f1";
    return color;
  }; //1

  const rars = (rarity) => {
    const rars = {
      0: "Ширпотреб",
      1: "Армейское качество",
      2: "Запрещённое",
      3: "Засекреченное",
      4: "Тайное",
      5: "Золотое",
      6: "Контрабанда",
    };
    const rar = rars[rarity] || "Ширпотреб";
    return rar;
  }; //1

  const [items, setItems] = useState([]); //1

  useEffect(() => {
    fetchData();
  }, []); //1

  async function fetchData() {
    const res = await fetch("/api/data");
    const data = await res.json();
    setItems(data.items);
    // console.log(data.items);
  } //1

  const [XX, setXX] = useState(0); //1 Кординаты x
  const [YY, setYY] = useState(0); //1 Кординаты y

  useEffect(() => {
    if (isHovered) {
      return;
    }
    if (props.X == "right") {
      setXX(-width);
    } else {
      setXX(width - 6);
    }
    if (props.X !== "right") {
      setYY(-10);
    } else {
      setYY(width * 1.44);
    }
  }, [props.X]); // 1 Кординаты x и y

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
      {/* ----------------------------------------------------------- */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: isHovered ? "block" : "none",
          width: width * 2 + 20,

          left: XX,
          top: YY,
        }}
        className={styles.tooltip}
      >
        <div className={styles.content}>
          <div className={styles.row}>
            <Image
              width={128}
              height={99}
              src="/econ/set_icons/set_anubis_png.png"
              alt="Picture"
            />
            <div className={styles.wrapper}>
              <p className={styles.name}>{props.name}</p>
              <p className={styles.collection}>Коллекция {props.collection}</p>
            </div>
          </div>
          <div className={styles.wrap}>
            <ul>
              <li>
                <span>Редкость:</span>
                {props.type},{" "}
                <span
                  style={{
                    color: colorTooltip(props.rarity),
                  }}
                >
                  {rars(props.rarity)}
                </span>
              </li>
              <li>
                <span>Износ:</span> {"Прямо с завода"}
              </li>
              <li>
                <span>Команда:</span> {}
                {}
                {"Любая"}
              </li>
            </ul>
          </div>
          <div className={styles.info}>
            <p className={styles.text}>{props.info}</p>
          </div>
          <div className={styles.column}>
            <p className={styles.collectionTwo}>Коллекция {props.collection}</p>
            <ul>
              {items.map(({ name, collection, rarity, type }, index) =>
                props.collection == collection ? (
                  <li
                    style={{
                      color: colorTooltip(rarity),
                    }}
                  >
                    {props.name == name ? (
                      <span>
                        <img
                          src="/icons/star.png"
                          alt="marker star"
                          width="14"
                          height="14"
                        />
                      </span>
                    ) : (
                      ""
                    )}
                    {type} | {name}
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------- */}
    </div>
  );
}
