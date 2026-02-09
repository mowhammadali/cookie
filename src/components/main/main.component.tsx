import { type ReactNode, PropsWithChildren } from "react";
import styles from "./main.module.css";

export default function Main({ children }: PropsWithChildren): ReactNode {
  return <div className={styles.main}>{children}</div>;
}
