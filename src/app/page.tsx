import { type ReactNode } from "react";
import styles from "./home.module.css";
import Image from "next/image";
import bnannerImage from "@/assets/images/banner.jpg";

export default function Home(): ReactNode {
  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <section className={styles["banner-image-wrapper-1"]}>
          <Image
            src={bnannerImage}
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </section>
      </div>
    </div>
  );
}
