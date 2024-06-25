"use client";

import ItemPrice from "@/app/components/atoms/itemPrice/ItemPrice";
import styles from "./All.module.scss";
import MainHeader from "@/app/components/molecules/inventoryHeader/inventoryHeader";
import React, { useEffect, useState, useRef } from "react"; // 0 useRef
import Image from "next/image";

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

  const [X, setX] = useState(""); // 0

  const blockRef = useRef(null); // 0

  const handleMouseMove = (e) => {
    const blockRect = blockRef.current.getBoundingClientRect();
    const x = e.clientX - blockRect.left;
    const y = e.clientY - blockRect.top;
    x > 600 ? setX("right") : setX("left"); // делим на пополам ширину
    console.log(`Координаты внутри блока: x=${x}, y=${y}`);
  }; // 0

  const [dropdown, setdropdownItems] = useState("По новизне"); // 2
  const [hidden, setHidden] = useState(true); // 2

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
            <p onClick={() => setdropdownItems("По новизне")}>По новизне</p>
            <p onClick={() => setdropdownItems("По качеству")}>По качеству</p>
            <p onClick={() => setdropdownItems("По алфавиту")}>По алфавиту</p>
            <p onClick={() => setdropdownItems("По типу")}>По типу</p>
            <p onClick={() => setdropdownItems("По колекции")}>По колекции</p>
            <p onClick={() => setdropdownItems("По использованию")}>
              По использованию
            </p>
          </div>
        </div>
      </div>
      {/* 2 */}

      <div className={styles.wrapper}>
        {items.map(
          ({ name, price, path, rarity, info, collection, type }, index) => (
            <ItemPrice
              path={path}
              name={name}
              price={price}
              info={info}
              rarity={rarity}
              collection={collection}
              type={type}
              width={175}
              discount={50}
              X={X}
            />
          )
        )}
      </div>
    </div>
  );
}
