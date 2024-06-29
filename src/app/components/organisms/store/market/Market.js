"use client";

import ItemPrice from "@/app/components/atoms/itemPrice/ItemPrice";
import styles from "./Market.module.scss";
import MainHeader from "@/app/components/molecules/storeHeader/StoreHeader";
import React, { useEffect, useState, useRef } from "react"; // 0 useRef

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch("/api/data");
    const data = await res.json();
    setItems(data.items);
    // setCases(data.cases);
    // console.log(data.items);
  }

  const [X, setX] = useState(""); // 0
  const [Y, setY] = useState(""); // NEW

  const blockRef = useRef(null); // 0

  const handleMouseMove = (e) => {
    const blockRect = blockRef.current.getBoundingClientRect();
    const x = e.clientX - blockRect.left;
    const y = e.clientY - blockRect.top; // NEW
    x > 600 ? setX("right") : setX("left"); // делим на пополам ширину
    y > 400 ? setY(true) : setY(false); // делим на пополам высоту NEW
    // console.log(`Координаты внутри блока: x=${x}, y=${y}`);
  }; // 0

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
              },
              index
            ) => (
              <ItemPrice
                path={path}
                name={name}
                price={price}
                info1={info1}
                info2={info2}
                info3={info3}
                rarity={rarity}
                collection={collection}
                type={type}
                width={175}
                discount={50}
                X={X}
                Y={Y} //NEW
                items={items}
                icon={icon}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
