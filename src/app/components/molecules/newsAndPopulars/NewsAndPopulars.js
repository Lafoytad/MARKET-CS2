"use client";

import styles from "./NewsAndPopulars.module.scss";
import ItemPrice from "../../atoms/itemPrice/ItemPrice";
import Image from "next/image";
import right from "/public/icons/right.png";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MyNotification from "../../atoms/notification/notification";

export default function NewsAndPopulars(props) {
  // props.path/img/title/item

  const [items, setItems] = useState([]);
  const [itemsTooltip, setItemsTooltip] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch("/api/data");
    const data = await res.json();
    if (props.item == "capsules") {
      setItems(data.capsules);
      setItemsTooltip(data.stickers);
    }
    if (props.item == "items") {
      setItems(data.items);
      setItemsTooltip(data.items);
    } // props.item
  }

  const firstFiveItemsNewAndPopular = items.slice(0, 5);
  const firstFiveItemsCopenhagen = items.slice(0, 5);

  return (
    <section
      style={{ background: `url(${props.img})` }}
      className={styles.container}
    >
      <Link href={props.path} className={styles.more}>
        <p className={styles.text}>Ещё</p>
        <Image src={right} alt="help" />
        {props.img == "/background/store_home_tournament.png" ? (
          <Image src={right} alt="help" />
        ) : (
          ""
        )}
      </Link>
      <div className={styles.content}>
        <p className={styles.title}>{props.title}</p>
        {props.img == "/background/store_home_coupon.png" ? (
          <div className={styles.wrapper}>
            <MyNotification />
            {firstFiveItemsNewAndPopular.map(
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
                  path={path}
                  name={name}
                  price={price}
                  info1={info1}
                  info2={info2}
                  info3={info3}
                  rarity={rarity}
                  collection={collection}
                  type={type}
                  icon={icon}
                  caseOn={caseOn}
                  itemsTooltip={itemsTooltip}
                  width={150}
                  Y={1}
                  thing={thing}
                />
              )
            )}
          </div>
        ) : (
          ""
        )}
        {props.img == "/background/store_home_tournament.png" ? (
          <div className={styles.wrapper}>
            {firstFiveItemsCopenhagen.map(
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
                  path={path}
                  name={name}
                  price={price}
                  info1={info1}
                  info2={info2}
                  info3={info3}
                  rarity={rarity}
                  collection={collection}
                  type={type}
                  icon={icon}
                  caseOn={caseOn}
                  itemsTooltip={itemsTooltip}
                  width={150}
                  discount={50}
                  Y={1}
                />
              )
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
