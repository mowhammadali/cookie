"use client";

import { type ReactNode } from "react";
import styles from "./search-box.module.css";
import MingcuteSearch2Line from "@/icons/MingcuteSearch2Line";

export default function SearchBox(): ReactNode {
  return (
    <div className={styles["search-box"]}>
      <input
        className={styles["search-filed"]}
        type="text"
        placeholder="Search..."
      />
      <button>
        <MingcuteSearch2Line />
      </button>
    </div>
  );
}
