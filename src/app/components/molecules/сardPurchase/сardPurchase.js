"use client";

import styles from "./сardPurchase.module.scss";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CardBuy() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
    setInterval(() => {
      const storedItems = JSON.parse(localStorage.getItem("items")) || [];
      setItems(storedItems);
    }, 150);
  }, []);

  const resetItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const cardRef = useRef(null);

  const [isScrolling, setIsScrolling] = useState(false); // Добавляем состояние для анимации

  const handleMouseLeave = () => {
    setIsScrolling(true);
  };

  useEffect(() => {
    if (isScrolling) {
      const scrollAnimation = () => {
        if (cardRef.current.scrollTop > 0) {
          cardRef.current.scrollTop -= 10; // Скроллим на 10 пикселей вверх
          requestAnimationFrame(scrollAnimation); // Вызываем анимацию снова
        } else {
          setIsScrolling(false); // Останавливаем анимацию
        }
      };
      requestAnimationFrame(scrollAnimation); // Запускаем анимацию
    }
  }, [isScrolling]);

  return (
    <div
      ref={cardRef}
      onMouseLeave={() => handleMouseLeave()}
      className={styles.card}
    >
      <div className={styles.wrapper}>
        <Image width={30} height={30} src={"/icons/watch.png"}></Image>
        <p className={styles.title}>Покупки</p>
      </div>
      <div className={styles.wrap}>
        {items.map(
          (
            {
              name,
              price,
              discount,
              path,
              rarity,
              info1,
              info2,
              info3,
              collection,
              type,
              icon,
              caseOn,
              timeBuyYear,
              timeBuyMonth,
              timeBuyDay,
              timeBuyhours,
              timeBuyMinutes,
              timeBuySeconds,
            },
            index
          ) => (
            <div
              onClick={(e) => resetItem(index)}
              key={index}
              className={styles.row}
            >
              <p className={styles.time}>
                {timeBuyYear}.{timeBuyMonth}.{timeBuyDay}{" "}
                {timeBuyhours <= 9 ? `0${timeBuyhours}` : timeBuyhours}:
                {timeBuyMinutes <= 9 ? `0${timeBuyMinutes}` : timeBuyMinutes}:
                {timeBuySeconds <= 9 ? `0${timeBuySeconds}` : timeBuySeconds}
              </p>
              <Image width={40} height={40} src={path}></Image>
              {name ? (
                <p className={styles.text}>
                  {type.length > 15 ? type.substring(0, 15) + "..." : type} |{" "}
                  {type.length > 15
                    ? name.length > 6
                      ? name.substring(0, 6) + "..."
                      : name
                    : type.length > 10
                    ? name.length > 11
                      ? name.substring(0, 11) + "..."
                      : name
                    : type.length > 5
                    ? name.length > 14
                      ? name.substring(0, 14) + "..."
                      : name
                    : name.length > 18
                    ? name.substring(0, 18) + "..."
                    : name}
                </p>
              ) : (
                <p className={styles.text}>
                  {type.length > 25 ? type.substring(0, 25) + "..." : type}
                </p>
              )}
              <p className={styles.price}>{discount}$</p>{" "}
            </div>
          )
        )}
      </div>
    </div>
  );
}
