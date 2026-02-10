import { type ReactNode } from "react";
import styles from "./not-found.module.css";

export default function NotFound(): ReactNode {
  return (
    <div className={styles["not-found"]}>
      <p>Page not found</p>
    </div>
  );
}
