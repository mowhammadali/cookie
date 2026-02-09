import { type ReactNode, PropsWithChildren } from "react";
import styles from "./main.module.css";
import Navbar from "@/components/navbar/navbar.component";

export default function Main({ children }: PropsWithChildren): ReactNode {
  return (
    <div className={styles.main}>
      <Navbar />
      {children}
    </div>
  );
}
