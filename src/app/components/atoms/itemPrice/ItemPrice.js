"use client";

import styles from "./ItemPrice.module.scss";
import Image from "next/image";
import React, { useState } from "react";
import Tooltip from "@/app/components/atoms/tooltip/Tooltip";

import { valueBuy, vis } from "@/app/store/slice/slice";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

export default function ItemPrice(props) {
  //* props.path/name/price/info1/info2/info3/rarity/collection/type/width?/discount?/X/Y/icon/caseOn?(является ли кейсом или капсулой)/itemsTooltip/url?/textUrl?/thing(если оружие)

  const isMobileSmall = useMediaQuery({ query: "(max-width: 650px)" });
  const isMobile = useMediaQuery({
    query: "(min-width: 651px) and (max-width: 1000px)",
  });

  const useResponsiveValue = () => {
    const isMobileSmall = useMediaQuery({ query: "(max-width: 650px)" });
    const isMobile = useMediaQuery({
      query: "(min-width: 651px) and (max-width: 1000px)",
    });
    const isTablet = useMediaQuery({
      query: "(min-width: 1001px) and (max-width: 1360px)",
    });
    const isDesktop = useMediaQuery({ query: "(min-width: 1360px)" });

    if (isMobileSmall) {
      return 60;
    } else if (isMobile) {
      return 80;
    } else if (isTablet) {
      return 120;
    } else if (isDesktop) {
      return 175;
    }
  };

  const widthMedia = useResponsiveValue();

  // const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const width = props.width || widthMedia;

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

  const itemsLocal = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const itemJSON = {
      type: props.type ? props.type : "",
      name: props.name ? props.name : "",
      price: props.price,
      discount: props.discount
        ? (props.price - props.price * (props.discount / 100)).toFixed(2)
        : props.price, // есть ли скидка discount(реальная цена покупки)
      rarity: props.rarity ? props.rarity : "",
      collection: props.collection ? props.collection : "",
      caseOn: props.caseOn ? props.caseOn : "",
      path: props.path ? props.path : "",
      info1: props.info1 ? props.info1 : "",
      info2: props.info2 ? props.info2 : "",
      info3: props.info3 ? props.info3 : "",
      icon: props.icon ? props.icon : "",
      thing: props.thing ? props.thing : "",
      timeBuyYear: year,
      timeBuyMonth: month,
      timeBuyDay: day,
      timeBuyhours: hours,
      timeBuyMinutes: minutes,
      timeBuySeconds: seconds,
    };

    const storedItems = JSON.parse(localStorage.getItem("itemsBuy")) || [];

    const Items = [...storedItems, itemJSON];

    localStorage.setItem("itemsBuy", JSON.stringify(Items));
  };

  return (
    <div
      onClick={() => {
        itemsLocal();
        dispatch(vis());
        dispatch(
          valueBuy({
            caseOn: props.caseOn ? props.caseOn : "",
            rarity: props.rarity ? props.rarity : "",
            type: props.type ? props.type : "",
            name: props.name ? props.name : "",
            price: props.discount
              ? (props.price - props.price * (props.discount / 100)).toFixed(2)
              : props.price,
          })
        );
      }}
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
        <div
          onMouseLeave={() => setIsHovered(false)}
          className={styles.wrapper}
          style={{
            ...(props.url || props.textUrl
              ? {}
              : {
                  height: isMobile || isMobileSmall ? "" : "28px",
                }),
          }}
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
          <div
            onMouseEnter={() => setIsHovered(true)}
            className={styles.info}
          ></div>
        </div>
      </div>
      <Tooltip
        isHovered={isHovered}
        width={width}
        X={props.X}
        Y={props.Y}
        name={props.name}
        collection={props.collection}
        type={props.type}
        rarity={props.rarity}
        info1={props.info1}
        info2={props.info2}
        info3={props.info3}
        icon={props.icon}
        itemsTooltip={props.itemsTooltip}
        caseOn={props.caseOn}
      />
    </div>
  );
}
