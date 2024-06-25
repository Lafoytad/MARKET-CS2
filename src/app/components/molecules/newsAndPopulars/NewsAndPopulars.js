"use client";

import styles from "./NewsAndPopulars.module.scss";
import ItemPrice from "../../atoms/itemPrice/ItemPrice";
import Image from "next/image";
import right from "/public/icons/right.png";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function NewsAndPopulars(props) {
  // props.path/img/title

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch("/api/data");
    const data = await res.json();
    setItems(data.items);
    console.log(data.items);
  }

  const firstFiveItemsNewAndPopular = items.slice(0, 5);
  const firstFiveItemsCopenhagen = items.slice(5, 10);

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
            {firstFiveItemsNewAndPopular.map(
              ({ name, price, path, rarity }, index) => (
                <ItemPrice
                  path={path}
                  name={name}
                  price={price}
                  rarity={rarity}
                  width={150}
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
              ({ name, price, path, rarity }, index) => (
                <ItemPrice
                  path={path}
                  name={name}
                  price={price}
                  rarity={rarity}
                  width={150}
                  discount={50}
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
