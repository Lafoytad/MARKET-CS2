"use client";

import styles from "./News.module.scss";
import React, { useEffect, useState } from "react";
import background from "/public/background/static.jpg";
import Image from "next/image";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch("/api/news");
    const data = await res.json();
    setNews(data);
  }

  return (
    <div className={styles.background}>
      {news.map(({ title, contents, author, url }, index) => (
        <div className={styles.wrapper} key={index}>
          <div className={styles.fone}></div>
          <a href={url} target="_blank">
            <Image src={background} alt="background" />
          </a>
          <div className={styles.column}>
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{contents}</p>
            <p className={styles.author}>{author}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
