"use client";

import ItemPrice from "@/app/components/atoms/itemPrice/ItemPrice";
import styles from "./Copenhagen.module.scss";
import MainHeader from "@/app/components/molecules/storeHeader/StoreHeader";
import React, { useEffect, useState, useRef } from "react";
import MyNotification from "@/app/components/atoms/notification/notification";
import { getAllData } from "@/app/services/data";

export default function Home() {
  const [items, setItems] = useState([]);
  const [itemsStickers, setitemsStickers] = useState([]);
  const [itemsTooltip, setItemsTooltip] = useState([]);

  useEffect(() => {
    getAllData().then((data) => {
      setItems(data.capsules);
      setitemsStickers(data.stickers);
      setItemsTooltip(data.stickers);
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
                discount={50}
                X={X}
                Y={Y}
                icon={icon}
                caseOn={caseOn}
                itemsTooltip={itemsTooltip}
                thing={thing}
              />
            )
          )}
          {itemsStickers.map(
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
                X={X}
                Y={Y}
                icon={icon}
                caseOn={caseOn}
                itemsTooltip={itemsTooltip}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
