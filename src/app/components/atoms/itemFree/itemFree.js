"use client";

import styles from "./itemFree.module.scss";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function ItemFree(props) {
  //* props.path/name/rarity/type/width?/caseOn?(является ли кейсом или капсулой)/num/thing

  const useResponsiveValue = () => {
    const isMobileSmall = useMediaQuery({ query: "(max-width: 650px)" });
    const isMobile = useMediaQuery({
      query: "(min-width: 651px) and (max-width: 1000px)",
    });
    const isTablet = useMediaQuery({
      query:
        "(min-width: 1001px) and (max-width: 1360px) and (max-height: 1025px)",
    });
    const isDesktop = useMediaQuery({ query: "(min-width: 1360px)" });

    if (isMobileSmall) {
      return 50;
    } else if (isMobile) {
      return 80;
    } else if (isTablet) {
      return 100;
    } else if (isDesktop) {
      return 120;
    }
  };

  const widthMedia = useResponsiveValue();

  const width = props.width || widthMedia;

  // const color = (rarity) => {
  //   const rarityColors = {
  //     0: "#7696ea59",
  //     1: "#3461fd59",
  //     2: "#ab4af559",
  //     3: "#ff1fe959",
  //     4: "#ff444459",
  //     5: "#ffe81959",
  //     6: "#ff8e3559",
  //   };
  //   const backgroundColor = rarityColors[rarity] || "#f1f1f159";
  //   return backgroundColor;
  // };

  const [weeklySet, setWeeklySet] = useState("");

  useEffect(() => {
    const weekly = JSON.parse(sessionStorage.getItem("weeklySet")) || [];
    setWeeklySet(weekly);

    setInterval(() => {
      const weekly = JSON.parse(sessionStorage.getItem("weeklySet")) || [];
      setWeeklySet(weekly);
    }, 150);
  }, []);

  const updateWeeklySet = () => {
    if (weeklySet.length !== 2) {
      const weekly = JSON.parse(sessionStorage.getItem("weeklySet")) || [];
      sessionStorage.setItem("weeklySet", JSON.stringify(weekly + props.num));
      const newItem = {
        type: props.type ? props.type : "",
        name: props.name ? props.name : "",
        path: props.path ? props.path : "",
      };

      const currentWeeklyItems =
        JSON.parse(sessionStorage.getItem("weeklyItems")) || [];
      currentWeeklyItems.push(newItem);
      sessionStorage.setItem("weeklyItems", JSON.stringify(currentWeeklyItems));

      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const random = Math.random();

      const itemJSON = {
        type: props.type ? props.type : "",
        name: props.name ? props.name : "",
        price: 0,
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
        random: random,
      };

      const storedItems = JSON.parse(localStorage.getItem("items")) || [];

      const Items = [...storedItems, itemJSON];

      localStorage.setItem("items", JSON.stringify(Items));
    }
  };

  return (
    <div
      onClick={() => {
        updateWeeklySet();
      }}
      style={{
        width: width,
        height: width * 1.72,
      }}
      className={styles.item}
    >
      <div className={styles.top}>
        <Image
          style={{
            opacity: weeklySet.length !== 2 ? "" : "0.2",
          }}
          width={150}
          height={150}
          className={styles.imgHover}
          src={props.path}
          alt="Picture"
        />{" "}
        {weeklySet[0] == props.num || weeklySet[1] == props.num ? (
          <div className={styles.Received}></div>
        ) : (
          ""
        )}
        <div
          style={{
            // backgroundImage: `url(${props.path})`,
            // backgroundColor: color(props.rarity),
            ...(props.caseOn && {
              left: "50%",
              transform: "scale(3)",
            }),
          }}
          className={styles.topBack}
        ></div>
      </div>
      <div className={styles.bottom}>
        <p
          style={{
            opacity: weeklySet.length !== 2 ? "" : "0.2",
          }}
          className={styles.text}
        >
          {props.type} {props.name ? ` | ${props.name}` : ""}
        </p>
      </div>
    </div>
  );
}
