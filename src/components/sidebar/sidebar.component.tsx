"use client";

import { type ReactNode, useEffect } from "react";
import styles from "./sidebar.module.css";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/assets/images/cookie-32x32.png";
import MingcuteLeftLine from "@/icons/MingcuteLeftLine";
import MingcuteRightLine from "@/icons/MingcuteRightLine";
import LucideLogIn from "@/icons/LucideLogIn";
import MingcuteHome3Fill from "@/icons/MingcuteHome3Fill";
import LucideUsers from "@/icons/LucideUsers";
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
      <ul>
        <li>
          <Link href="/" className={styles.link}>
            <MingcuteHome3Fill />
            Home
          </Link>
        </li>{" "}
        <li>
          <Link href="/" className={styles.link}>
            <LucideUsers />
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
}
