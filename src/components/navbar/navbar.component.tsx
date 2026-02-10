"use client";

import { type ReactNode } from "react";
import styles from "./navbar.module.css";
import SearchBox from "@/components/search-box/search-box.component";
import Image from "next/image";
import logoImage from "@/assets/images/cookie-32x32.png";
import LucideLogIn from "@/icons/LucideLogIn";
import Button from "@/components/shared/button/button.component";
import Dialog from "@/components/dialog/dialog.component";
import SignIn from "@/components/sign-in/sign-in.component";
import { useModalStore } from "@/stores/useModalStore";

export default function Navbar(): ReactNode {
  const { isOpen: isModalOpen, open: openModal } = useModalStore(
    (state) => state,
  );

  return (
    <div className={styles.navbar}>
      <SearchBox />
      <Button
        variant="primary"
        className={styles["sign-in-button"]}
        onClick={() => openModal()}
      >
        <LucideLogIn />
        Sign In
      </Button>
      <section className={styles["logo-section"]}>
        <p>Cookie</p>
        <Image src={logoImage} alt="logo" />
      </section>
      {isModalOpen && (
        <Dialog>
          <SignIn />
        </Dialog>
      )}
    </div>
  );
}
