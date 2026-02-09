"use client";

import { type ReactNode, useEffect } from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import logoImage from "@/assets/images/cookie-32x32.png";
import MingcuteLeftLine from "@/icons/MingcuteLeftLine";
import MingcuteRightLine from "@/icons/MingcuteRightLine";
import LucideLogIn from "@/icons/LucideLogIn";
import clsx from "clsx";
import Button from "@/components/shared/button/button.component";
import { useSidebarStore } from "@/stores/useSidebarStore";

export default function Sidebar(): ReactNode {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const toggleSidebar = useSidebarStore((state) => state.toggle);

  const handleToggleSidebar = (): void => {
    toggleSidebar();
  };

  useEffect(() => {
    document.body.classList.toggle("shrinked", !isOpen);
  }, [isOpen]);

  return (
    <div className={clsx(styles.sidebar, !isOpen && styles.shrinked)}>
      <header className={clsx(styles.header, !isOpen && styles.shrinked)}>
        {isOpen && (
          <section className={styles["logo-section"]}>
            <p>Cookie</p>
            <Image src={logoImage} alt="logo" />
          </section>
        )}

        {isOpen ? (
          <MingcuteLeftLine
            onClick={handleToggleSidebar}
            className={styles["left-icon"]}
          />
        ) : (
          <MingcuteRightLine
            onClick={handleToggleSidebar}
            className={styles["left-icon"]}
          />
        )}
      </header>
      <Button variant="primary" className={styles["sign-in-button"]}>
        <LucideLogIn />
        Sign In
      </Button>
    </div>
  );
}
