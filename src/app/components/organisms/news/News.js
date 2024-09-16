import styles from "./News.module.scss";
import background from "/public/background/static.jpg";
import Image from "next/image";
import { getAllPosts } from "@/app/services/data";

export const revalidate = 3600;

export default async function News() {
  const news = await getAllPosts();

  return (
    <div className={styles.background}>
      {news.map(({ title, contents, author, url }, index) => (
        <div className={styles.wrapper} key={index}>
          <div className={styles.fone}></div>
          <a href={url} target="_blank">
            <Image
              height={350}
              width={1200}
              src={background}
              alt="background"
            />
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
