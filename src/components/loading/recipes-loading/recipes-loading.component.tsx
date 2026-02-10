"use client";

import { type ReactNode } from "react";
import styles from "./recipes-loading.module.css";
import Skeleton from "@/components/loading/skeleton/skeleton.component";

export default function RecipesLoading(): ReactNode {
  const numbers = Array.from({ length: 12 }).map((_, i) => i);

  return (
    <div className={styles["recipes-loading"]}>
      {numbers.map((number) => (
        <div key={number} className={styles["loading-card"]}>
          <div className={styles["skeleton-wrapper"]}>
            <Skeleton width="100%" height="100%" />
          </div>
          <Skeleton width="60%" height="1.2rem" borderRadius="0.3rem" />
          <Skeleton width="60%" height="1.2rem" borderRadius="0.3rem" />
          <Skeleton width="40%" height="1.8rem" borderRadius="0.5rem" />
        </div>
      ))}
    </div>
  );
}
