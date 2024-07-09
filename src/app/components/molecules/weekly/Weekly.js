"use client";

import { getAllData } from "@/app/services/data";
import styles from "./Weekly.module.scss";
import { useEffect, useState } from "react";
import ItemFree from "../../atoms/itemFree/itemFree";

export default function Weekly() {
  const [items1, setItems1] = useState({});
  const [items2, setItems2] = useState({});
  const [items3, setItems3] = useState({});
  const [items4, setItems4] = useState({});

  useEffect(() => {
    getAllData().then((data) => {
      let random1 = Math.floor(Math.random() * data.items.length);
      let random2 = Math.floor(Math.random() * data.items.length);
      let random3 = Math.floor(Math.random() * data.stickers.length);
      let random4 = Math.floor(Math.random() * data.cases.length);
      setItems1(data.items[random1]);
      setItems2(data.items[random2]);
      setItems3(data.stickers[random3]);
      setItems4(data.cases[random4]);
      console.log(data.items[random1]);
      console.log(data.items[random2]);
      console.log(data.stickers[random3]);
      console.log(data.cases[random4]);
    });
  }, []);

  const [weeklySet, setWeeklySet] = useState("");
  const [weeklyItems, setWeeklyItems] = useState([]);

  useEffect(() => {
    const weekly = JSON.parse(sessionStorage.getItem("weeklySet")) || [];
    setWeeklySet(weekly);
    const weeklyItem = JSON.parse(sessionStorage.getItem("weeklyItems")) || [];
    setWeeklyItems(weeklyItem);
    setInterval(() => {
      const weekly = JSON.parse(sessionStorage.getItem("weeklySet")) || [];
      setWeeklySet(weekly);
      const weeklyItem =
        JSON.parse(sessionStorage.getItem("weeklyItems")) || [];
      setWeeklyItems(weeklyItem);
    }, 150);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={styles.item}
          style={{
            backgroundColor: weeklySet.length !== 2 ? "" : "#31313171",
          }}
        >
          <div className={styles.fone}></div>
          <ItemFree
            path={
              weeklySet[0] == 1
                ? weeklyItems[0].path
                : weeklySet[1] == 1
                ? weeklyItems[1].path
                : items1.path
            }
            name={
              weeklySet[0] == 1
                ? weeklyItems[0].name
                : weeklySet[1] == 1
                ? weeklyItems[1].name
                : items1.name
            }
            rarity={items1.rarity}
            type={
              weeklySet[0] == 1
                ? weeklyItems[0].type
                : weeklySet[1] == 1
                ? weeklyItems[1].type
                : items1.type
            }
            caseOn={items1.caseOn}
            num={"1"}
            thing={items1.thing}
          />
        </div>
        <div
          className={styles.item}
          style={{
            backgroundColor: weeklySet.length !== 2 ? "" : "#31313171",
          }}
        >
          <div className={styles.fone}></div>
          <ItemFree
            path={
              weeklySet[0] == 2
                ? weeklyItems[0].path
                : weeklySet[1] == 2
                ? weeklyItems[1].path
                : items2.path
            }
            name={
              weeklySet[0] == 2
                ? weeklyItems[0].name
                : weeklySet[1] == 2
                ? weeklyItems[1].name
                : items2.name
            }
            rarity={items2.rarity}
            type={
              weeklySet[0] == 2
                ? weeklyItems[0].type
                : weeklySet[1] == 2
                ? weeklyItems[1].type
                : items2.type
            }
            caseOn={items2.caseOn}
            num={"2"}
            thing={items2.thing}
          />
        </div>
        <div
          className={styles.item}
          style={{
            backgroundColor: weeklySet.length !== 2 ? "" : "#31313171",
          }}
        >
          <div className={styles.fone}></div>
          <ItemFree
            path={
              weeklySet[0] == 3
                ? weeklyItems[0].path
                : weeklySet[1] == 3
                ? weeklyItems[1].path
                : items3.path
            }
            name={
              weeklySet[0] == 3
                ? weeklyItems[0].name
                : weeklySet[1] == 3
                ? weeklyItems[1].name
                : items3.name
            }
            rarity={items3.rarity}
            type={
              weeklySet[0] == 3
                ? weeklyItems[0].type
                : weeklySet[1] == 3
                ? weeklyItems[1].type
                : items3.type
            }
            caseOn={items3.caseOn}
            num={"3"}
            thing={items3.thing}
          />
        </div>
        <div
          className={styles.item}
          style={{
            backgroundColor: weeklySet.length !== 2 ? "" : "#31313171",
          }}
        >
          <div className={styles.fone}></div>
          <ItemFree
            path={
              weeklySet[0] == 4
                ? weeklyItems[0].path
                : weeklySet[1] == 4
                ? weeklyItems[1].path
                : items4.path
            }
            name={
              weeklySet[0] == 4
                ? weeklyItems[0].name
                : weeklySet[1] == 4
                ? weeklyItems[1].name
                : items4.name
            }
            rarity={items4.rarity}
            type={
              weeklySet[0] == 4
                ? weeklyItems[0].type
                : weeklySet[1] == 4
                ? weeklyItems[1].type
                : items4.type
            }
            caseOn={items4.caseOn}
            num={"4"}
            thing={items4.thing}
          />
        </div>
      </div>
      <div className={styles.column}>
        <p className={styles.title}>Ежедневный набор</p>
        <p className={styles.subtitle}>
          {weeklySet.length !== 2
            ? "Ежедневные награды не получены"
            : "Ежедневные награды получены"}
        </p>
        <p className={styles.txt}>
          {weeklySet.length !== 2
            ? "Вы можете получить ежедневный набор"
            : "Вы получите ежедневный набор, чтобы получить ещё перезапустите браузер"}
        </p>
      </div>
    </section>
  );
}
