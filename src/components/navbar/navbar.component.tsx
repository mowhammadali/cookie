import { type ReactNode } from "react";
import styles from "./navbar.module.css";
import SearchBox from "@/components/search-box/search-box.component";

export default function Navbar(): ReactNode {
  return (
    <div className={styles.navbar}>
      <SearchBox />
    </div>
  );
}
