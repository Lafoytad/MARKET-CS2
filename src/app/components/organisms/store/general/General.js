"use client";

import ItemPrice from "@/app/components/atoms/itemPrice/ItemPrice";
import styles from "./General.module.scss";
import MainHeader from "@/app/components/molecules/storeHeader/StoreHeader";
import React, { useEffect, useState, useRef } from "react";
import MyNotification from "@/app/components/atoms/notification/notification";
import { getAllData } from "@/app/services/data";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const useResponsiveValue = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
    const isTablet = useMediaQuery({
      query: "(min-width: 1001px) and (max-width: 1360px)",
    });
    const isDesktop = useMediaQuery({ query: "(min-width: 1360px)" });

    if (isMobile) {
      return 80;
    } else if (isTablet) {
      return 120;
    } else if (isDesktop) {
      return 175;
    }
  };

  const widthMedia = useResponsiveValue();

  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllData().then((data) => {
      setItems(data.general);
    });
  }, []);

  const [X, setX] = useState("");
  const [Y, setY] = useState("");

  const blockRef = useRef(null);

  const handleMouseMove = (e) => {
    const blockRect = blockRef.current.getBoundingClientRect();
    const x = e.clientX - blockRect.left;
    const y = e.clientY - blockRect.top;
    x > 600 ? setX("right") : setX("left"); // делим на пополам ширину
    y > 400 ? setY(true) : setY(false); // делим на пополам высоту
    // console.log(`Координаты внутри блока: x=${x}, y=${y}`);
  };

  return (
    <div className={styles.background}>
      <div className={styles.fone}></div>
      <MainHeader />
      <div
        onMouseMove={handleMouseMove}
        ref={blockRef}
        className={styles.zoneSkroll}
      >
        <div className={styles.wrapper}>
          <MyNotification />
          {items.map(
            (
              {
                name,
                price,
                path,
                rarity,
                info1,
                info2,
                info3,
                collection,
                type,
                icon,
                caseOn,
                url,
                textUrl,
                thing,
              },
              index
            ) => (
              <ItemPrice
                key={index}
                path={path}
                name={name}
                price={price}
                info1={info1}
                info2={info2}
                info3={info3}
                rarity={rarity}
                collection={collection}
                type={type}
                width={widthMedia}
                X={X}
                Y={Y}
                icon={icon}
                caseOn={caseOn}
                url={url}
                textUrl={textUrl}
                thing={thing}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
