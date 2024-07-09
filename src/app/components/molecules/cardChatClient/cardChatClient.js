"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ChatForm from "@/app/components/atoms/сhatForm/сhatForm";
import styles from "./cardChatClient.module.scss";

const CardChatClient = ({ initialPosts }) => {
  const [allPosts, setAllPosts] = useState(initialPosts);

  const handlePostCreated = (newPost) => {
    setAllPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <Image width={30} height={30} src="/icons/flair.png" alt="Flair Icon" />
        <p className={styles.title}>Чат</p>
        <ChatForm onPostCreated={handlePostCreated} />
      </div>
      <div className={styles.wrap}>
        {allPosts.map(({ title, body }, index) => (
          <div key={index} className={styles.row}>
            <p className={styles.name}>{title}</p>
            <p className={styles.text}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardChatClient;
