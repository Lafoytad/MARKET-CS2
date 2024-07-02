// "use client";

import { useState, useEffect } from "react";
import styles from "./dropdownAll.module.scss";
import Image from "next/image";

import { DropValue } from "@/app/store/slice/dropdown";
import { useSelector, useDispatch } from "react-redux";

export default function Dropdown() {
  const dropdownValue = useSelector((state) => state.dropdown.value);
  const dispatch = useDispatch();

  const [hidden, setHidden] = useState(true);
  const [dropdown, setdropdownItems] = useState("По новизне");

  useEffect(() => {
    setdropdownItems(dropdownValue);
  }, [dropdownValue]);

  return (
    <div className={styles.dropdown}>
      <div onClick={() => setHidden(!hidden)} className={styles.block}>
        <Image
          className={styles.else}
          width={18}
          height={18}
          src={"/icons/else.png"}
        />
        <p className={styles.textMain}>{dropdown}</p>
        <Image width={18} height={12} src={"/icons/bottom.png"} />
        <div hidden={hidden} className={styles.blockTwo}>
          <p
            onClick={() => {
              dispatch(DropValue("По новизне"));
            }}
          >
            По новизне
          </p>
          <p
            onClick={() => {
              dispatch(DropValue("По алфавиту"));
            }}
          >
            По алфавиту
          </p>
          <p
            onClick={() => {
              dispatch(DropValue("По типу"));
            }}
          >
            По типу
          </p>
          <p
            onClick={() => {
              dispatch(DropValue("По колекции"));
            }}
          >
            По колекции
          </p>
        </div>
      </div>
    </div>
  );
}
