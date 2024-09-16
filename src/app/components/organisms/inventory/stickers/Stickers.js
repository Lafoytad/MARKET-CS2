"use client";

import Item from "@/app/components/atoms/item/Item";
import styles from "./Stickers.module.scss";
import MainHeader from "@/app/components/molecules/inventoryHeader/inventoryHeader";
import React, { useEffect, useState, useRef } from "react";
import Dropdown from "@/app/components/molecules/dropdownAll/dropdownAll";
import warning from "/public/icons/warning.png";
import Image from "next/image";

import { useSelector } from "react-redux";
import { getAllData } from "@/app/services/data";

export default function Home() {
  const dropdownValue = useSelector((state) => state.dropdown.value);

  const [items, setItems] = useState([]);
  const [itemsTooltip, setItemsTooltip] = useState([]);
  const [stickersTooltip, setStickersTooltip] = useState([]);

  const [alphabet, setAlphabet] = useState([]);
  const [type, setType] = useState([]);
  const [collection, setСollection] = useState([]);
  const [rarity, setRarity] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    const filtered = storedItems.filter((item) => item.type === "Наклейка");

    setItems(filtered);

    setAlphabet([...filtered].sort((a, b) => a.name.localeCompare(b.name))); // сортировка
    setType([...filtered].sort((a, b) => a.type.localeCompare(b.type)));
    setСollection(
      [...filtered].sort((a, b) => a.collection.localeCompare(b.collection))
    );
    setRarity(
      [...filtered].sort((a, b) => a.rarity.localeCompare(b.rarity)).reverse()
    );

    setInterval(() => {
      const storedItems = JSON.parse(localStorage.getItem("items")) || [];
      const filtered = storedItems.filter((item) => item.type === "Наклейка");

      setItems(filtered);

      setAlphabet([...filtered].sort((a, b) => a.name.localeCompare(b.name))); // сортировка
      setType([...filtered].sort((a, b) => a.type.localeCompare(b.type)));
      setСollection(
        [...filtered].sort((a, b) => a.collection.localeCompare(b.collection))
      );
      setRarity(
        [...filtered].sort((a, b) => a.rarity.localeCompare(b.rarity)).reverse()
      );
    }, 150);
  }, []);

  useEffect(() => {
    getAllData().then((data) => {
      setItemsTooltip(data.items);
      setStickersTooltip(data.stickers);
    });
  }, []);

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
                    caseOn,
                  },
                  index
                ) => (
                  <Item
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
                    items={items}
                    icon={icon}
                    transition={1000}
                    itemsTooltip={itemsTooltip}
                    caseOn={caseOn}
                    stickersTooltip={stickersTooltip}
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
                    caseOn,
                  },
                  index
                ) => (
                  <Item
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
                    items={items}
                    icon={icon}
                    transition={1000}
                    itemsTooltip={itemsTooltip}
                    caseOn={caseOn}
                    stickersTooltip={stickersTooltip}
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
                    caseOn,
                  },
                  index
                ) => (
                  <Item
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
                    items={items}
                    icon={icon}
                    transition={1000}
                    itemsTooltip={itemsTooltip}
                    caseOn={caseOn}
                    stickersTooltip={stickersTooltip}
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
                    caseOn,
                  },
                  index
                ) => (
                  <Item
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
                    items={items}
                    icon={icon}
                    transition={1000}
                    itemsTooltip={itemsTooltip}
                    caseOn={caseOn}
                    stickersTooltip={stickersTooltip}
                  />
                )
              )
            : ""}
          {dropdownValue == "По редкости"
            ? rarity.map(
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
                  <Item
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
                    items={items}
                    icon={icon}
                    transition={1000}
                    itemsTooltip={itemsTooltip}
                    caseOn={caseOn}
                    stickersTooltip={stickersTooltip}
                  />
                )
              )
            : ""}
        </div>
      ) : (
        <div className={styles.center}>
          <Image width={30} height={30} src={warning} alt="#"></Image>
          <p>Не найдено предметов выбранной категории: Наклейки.</p>
        </div>
      )}
    </div>
  );
}
