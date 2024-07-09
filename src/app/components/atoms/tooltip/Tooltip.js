"use client";

import styles from "./Tooltip.module.scss";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Tooltip(props) {
  //* props.isHovered/width/X/Y/name/collection/type/rarity/info1/info2/info3/icon/transition?/itemsTooltip/caseOn?(является ли кейсом или капсулой)
  const width = props.width || "160";

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
  };

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
  };

  const [XX, setXX] = useState(0);
  const [YY, setYY] = useState(0);

  useEffect(() => {
    if (isHovered) {
      return;
    }
    // width право
    if (props.X == "right") {
      setXX(-width);
    } else {
      // width лево
      setXX(props.left ? width - props.left : width - 6);
    }
    if (props.X !== "right") {
      // height лево
      setYY(props.Y ? -250 : -10);
    } else {
      // height право
      setYY(props.buttom ? width - props.buttom : width * 1.44);
    }
  }, [props.X, props.Y]);

  useEffect(() => {
    if (props.transition) {
      setIsHovered(props.isHovered);
    } else {
      setHover(props.isHovered);
    }
  }, [props.isHovered]); // доп

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const timeoutId = setTimeout(() => {
        setHover(true);
      }, props.transition);
      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      setHover(false);
    }
  }, [isHovered]);

  const [Hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: Hover ? "block" : "none",
        width: width * 2 + 20,

        left: XX,
        top: YY,
      }}
      className={styles.tooltip}
    >
      <div className={styles.content}>
        <div className={styles.row}>
          <Image width={128} height={99} src={props.icon} alt="Picture" />
          <div className={styles.wrapper}>
            {props.collection ? (
              <div>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.collection}>
                  Коллекция {props.collection}
                </p>
              </div>
            ) : (
              <p className={styles.name}>{props.type}</p>
            )}
          </div>
        </div>
        {/* / */}
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
                {props.caseOn ? "базового класса" : rars(props.rarity)}
              </span>
            </li>
            {!props.caseOn && props.type !== "Наклейка" ? (
              <li>
                <span>Износ:</span> {"Прямо с завода"}
              </li>
            ) : (
              ""
            )}
            {!props.caseOn && props.type !== "Наклейка" ? (
              <li>
                <span>Команда:</span> {}
                {}
                {"Любая"}
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        {/* / */}
        {props.info1 || props.info2 || props.info3 ? (
          <div className={styles.info}>
            <p className={styles.text}>
              {props.info1}
              {props.info2}
            </p>
            <p className={styles.quote}>{props.info3}</p>
          </div>
        ) : (
          ""
        )}

        {(props.itemsTooltip || props.stickersTooltip) && props.collection ? (
          <div className={styles.column}>
            <p className={styles.collectionTwo}>Коллекция {props.collection}</p>
            <ul
              style={{
                ...(!props.caseOn && {
                  paddingLeft: "16px",
                }),
              }}
              className={styles.topBack}
            >
              {props.caseOn ? (
                <li>Внутри находится один из следующих предметов:</li>
              ) : (
                ""
              )}
              {/* /////// */}
              {!props.stickersTooltip
                ? props.itemsTooltip.map(
                    ({ name, collection, rarity, type }, index) =>
                      props.collection == collection ? (
                        <li
                          key={index}
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
                  )
                : props.type === "Наклейка" || props.type.startsWith("Капсула")
                ? props.stickersTooltip.map(
                    ({ name, collection, rarity, type }, index) =>
                      props.collection == collection ? (
                        <li
                          key={index}
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
                  )
                : props.itemsTooltip.map(
                    ({ name, collection, rarity, type }, index) =>
                      props.collection == collection ? (
                        <li
                          key={index}
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

              {/* /////// */}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
