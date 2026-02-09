import { type ReactNode } from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import logoImage from "@/assets/images/cookie-32x32.png";
import MingcuteLeftLine from "@/icons/MingcuteLeftLine";

export default function Sidebar(): ReactNode {
  return (
    <div className={styles.sidebar}>
      <header className={styles.header}>
        <section className={styles["logo-section"]}>
          <p>Cookie</p>
          <Image src={logoImage} alt="logo" />
        </section>
        <section className={styles["left-icon-section"]}>
          <MingcuteLeftLine
            color="var(--text-tertiary)"
            className={styles["left-icon"]}
          />
        </section>
      </header>
    </div>
  );
}
