"use client";

import Item from "@/app/components/atoms/item/Item";
import styles from "./Stickers.module.scss";
import MainHeader from "@/app/components/molecules/inventoryHeader/inventoryHeader";
import React, { useEffect, useState, useRef } from "react";
import Dropdown from "@/app/components/molecules/dropdownAll/dropdownAll";
import warning from "/public/icons/warning.png";
import Image from "next/image";

import { useSelector } from "react-redux";

export default function Home() {
  const dropdownValue = useSelector((state) => state.dropdown.value);

  const [items, setItems] = useState([]);
  const [itemsTooltip, setItemsTooltip] = useState([]);

  const [alphabet, setAlphabet] = useState([]);
  const [type, setType] = useState([]);
  const [collection, setСollection] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    const filtered = storedItems.filter((item) => item.type === "Наклейка");

    setItems(filtered);

    setAlphabet([...filtered].sort((a, b) => a.name.localeCompare(b.name))); // сортировка
    setType([...filtered].sort((a, b) => a.type.localeCompare(b.type)));
    setСollection(
      [...filtered].sort((a, b) => a.collection.localeCompare(b.collection))
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch("/api/data");
    const data = await res.json();
    setItemsTooltip(data.items);
  }

  const [X, setX] = useState("");
  const [Y, setY] = useState("");

  const blockRef = useRef(null);

  const handleMouseMove = (e) => {
    const blockRect = blockRef.current.getBoundingClientRect();
    const x = e.clientX - blockRect.left;
    const y = e.clientY - blockRect.top;
    x > 1400 ? setX("right") : setX("left"); // делим на пополам ширину
    y > 400 ? setY(true) : setY(false); // делим на пополам высоту
    // console.log(`Координаты внутри блока: x=${x}, y=${y}`);
  };

  return (
    <div
      style={{
        backgroundColor: items.length > 0 ? "" : "rgba(68, 68, 68, 0.384)",
      }}
      onMouseMove={handleMouseMove}
      ref={blockRef}
      className={styles.background}
    >
      <div className={styles.fone}></div>

      <MainHeader />

      <Dropdown />

      {items.length > 0 ? (
        <div className={styles.wrapper}>
          {dropdownValue == "По новизне"
            ? items.map(
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
                    Y={Y}
                    items={items}
                    icon={icon}
                    transition={1000}
                    itemsTooltip={itemsTooltip}
                  />
                )
              )
            : ""}
          {dropdownValue == "По алфавиту"
            ? alphabet.map(
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
                    Y={Y}
                    items={items}
                    icon={icon}
                    transition={1000}
                    itemsTooltip={itemsTooltip}
                  />
                )
              )
            : ""}
          {dropdownValue == "По типу"
            ? type.map(
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
                    Y={Y}
                    items={items}
                    icon={icon}
                    transition={1000}
                    itemsTooltip={itemsTooltip}
                  />
                )
              )
            : ""}
          {dropdownValue == "По колекции"
            ? collection.map(
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
                    Y={Y}
                    items={items}
                    icon={icon}
                    transition={1000}
                    itemsTooltip={itemsTooltip}
                  />
                )
              )
            : ""}
        </div>
      ) : (
        <div className={styles.center}>
          <Image width={30} height={30} src={warning}></Image>
          <p>Не найдено предметов выбранной категории: Наклейки.</p>
        </div>
      )}
    </div>
  );
}
