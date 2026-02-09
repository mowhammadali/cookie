import { type ReactNode } from "react";
import styles from "./navbar.module.css";
import SearchBox from "@/components/search-box/search-box.component";
import Image from "next/image";
import logoImage from "@/assets/images/cookie-32x32.png";
import LucideLogIn from "@/icons/LucideLogIn";
import Button from "@/components/shared/button/button.component";

export default function Navbar(): ReactNode {
  return (
    <div className={styles.navbar}>
      <SearchBox />
      <Button variant="primary" className={styles["sign-in-button"]}>
        <LucideLogIn />
        Sign In
      </Button>
      <section className={styles["logo-section"]}>
        <p>Cookie</p>
        <Image src={logoImage} alt="logo" />
      </section>
    </div>
  );
}
