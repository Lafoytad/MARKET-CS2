"use client";

import styles from "./Panel.module.scss";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import dynamic from "next/dynamic";

const ItemAside = dynamic(
  () => import("@/app/components/atoms/itemAside/itemAside"),
  {
    loading: () => (
      <div
        style={{
          width: "100%",
          height: "100%",
          left: "12.5%",
          top: "50%",
          transform: "translate(-5%, -20%)",
          position: "absolute",
          backgroundImage: "url(/background/download.gif)",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    ),
  }
);

export default function Panel() {
  const router = useRouter();

  const [active, setActive] = useState(1);

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch("/api/data");
    const data = await res.json();
    setItems(
      [...data.items]
        .sort((a, b) => a.rarity.localeCompare(b.rarity))
        .reverse()
        .slice(0, 14)
        .reverse()
        .slice(0, 5)
    );
  }

  return (
    <section className={styles.section}>
      <aside
        onClick={() => router.push("/store/copenhagen")}
        className={styles.one}
      >
        <div className={styles.one__back}></div>
        <div className={styles.one__capsule}></div>
        <p className={styles.one__title}>
          PGL COPENHAGEN 2024: КАПСУЛЫ И ПРЕДМЕТЫ
        </p>
        <div className={styles.one__text}>
          <p>Скидка!</p>
        </div>
      </aside>
      {/* //!---------------------------------------------------- */}
      <aside className={styles.two}>
        <div className={styles.two__wrap}>
          <p className={styles.two__title}>Новое и популярное</p>
          <Link className={styles.two__else} href="/store/market">
            Ещё
          </Link>
        </div>

        <div
          style={{
            transform:
              active === 1
                ? "translateX(-0%)"
                : active === 2
                ? "translateX(-20%)"
                : active === 3
                ? "translateX(-40%)"
                : active === 4
                ? "translateX(-60%)"
                : active === 5
                ? "translateX(-80%)"
                : "",
          }}
          className={styles.two__wrapper}
        >
          {items.map(({ name, price, path, rarity, type }, index) => (
            <ItemAside
              key={index}
              path={path}
              name={name}
              price={price}
              rarity={rarity}
              width={256}
              type={type}
            />
          ))}
        </div>

        <div className={styles.two__pageControl}>
          <span
            onClick={() => {
              active === 1 ? "" : setActive(active - 1);
            }}
            style={{
              backgroundImage:
                active === 1
                  ? "url(/icons/pointerActive.png)"
                  : "url(/icons/pointer.png)",
            }}
            className={styles.two__left}
          ></span>
          <span
            onClick={() => {
              active === 1 ? "" : setActive(1);
            }}
            style={{
              backgroundColor: active == 1 ? "#c7c7c7" : "",
            }}
            className={styles.two__block}
          ></span>
          <span
            onClick={() => {
              active === 2 ? "" : setActive(2);
            }}
            style={{
              backgroundColor: active == 2 ? "#c7c7c7" : "",
            }}
            className={styles.two__block}
          ></span>
          <span
            onClick={() => {
              active === 3 ? "" : setActive(3);
            }}
            style={{
              backgroundColor: active == 3 ? "#c7c7c7" : "",
            }}
            className={styles.two__block}
          ></span>
          <span
            onClick={() => {
              active === 4 ? "" : setActive(4);
            }}
            style={{
              backgroundColor: active == 4 ? "#c7c7c7" : "",
            }}
            className={styles.two__block}
          ></span>
          <span
            onClick={() => {
              active === 5 ? "" : setActive(5);
            }}
            style={{
              backgroundColor: active == 5 ? "#c7c7c7" : "",
            }}
            className={styles.two__block}
          ></span>
          <span
            onClick={() => {
              active === 5 ? "" : setActive(active + 1);
            }}
            style={{
              backgroundImage:
                active === 5
                  ? "url(/icons/pointerActive.png)"
                  : "url(/icons/pointer.png)",
            }}
            className={styles.two__right}
          ></span>
        </div>
      </aside>
    </section>
  );
}
