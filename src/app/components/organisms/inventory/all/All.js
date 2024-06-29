"use client";

import Item from "@/app/components/atoms/item/Item";
import styles from "./All.module.scss";
import MainHeader from "@/app/components/molecules/inventoryHeader/inventoryHeader";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image"; // 2

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch("/api/data");
    const data = await res.json();
    setItems(data.items);
  }

  const [X, setX] = useState("");
  const [Y, setY] = useState(""); // NEW

  const blockRef = useRef(null);

  const handleMouseMove = (e) => {
    const blockRect = blockRef.current.getBoundingClientRect();
    const x = e.clientX - blockRect.left;
    const y = e.clientY - blockRect.top; // NEW
    x > 1400 ? setX("right") : setX("left"); // делим на пополам ширину
    y > 400 ? setY(true) : setY(false); // делим на пополам высоту NEW
    // console.log(`Координаты внутри блока: x=${x}, y=${y}`);
  }; // 0

  const [hidden, setHidden] = useState(true); // 2
  const [dropdown, setdropdownItems] = useState("По новизне"); // 2

  const dropdownItems = (item) => {
    setdropdownItems(item);
    switch (dropdown) {
      case "По качеству":
        break;

      case "По алфавиту":
        break;

      case "По типу":
        break;

      case "По колекции":
        break;

      case "По использованию":
        break;

      default: // "По новизне"
        break;
    }
  }; // 2

  return (
    <div
      onMouseMove={handleMouseMove}
      ref={blockRef}
      className={styles.background}
    >
      <div className={styles.fone}></div>

      <MainHeader />

      <div className={styles.dropdown}>
        <div onClick={() => setHidden(!hidden)} className={styles.block}>
          <p className={styles.textMain}>{dropdown}</p>
          <Image width={18} height={12} src={"/icons/bottom.png"} />
          <div hidden={hidden} className={styles.blockTwo}>
            <p onClick={() => dropdownItems("По новизне")}>По новизне</p>
            <p onClick={() => dropdownItems("По качеству")}>По качеству</p>
            <p onClick={() => dropdownItems("По алфавиту")}>По алфавиту</p>
            <p onClick={() => dropdownItems("По типу")}>По типу</p>
            <p onClick={() => dropdownItems("По колекции")}>По колекции</p>
            <p onClick={() => dropdownItems("По использованию")}>
              По использованию
            </p>
          </div>
        </div>
      </div>
      {/* 2 */}

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
            <Item
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
  );
}
