import { type ReactNode, Suspense } from "react";
import styles from "./home.module.css";
import Image from "next/image";
import heroImage from "@/assets/images/banner.jpg";
import Recipes from "@/components/recipes/recipes.component";
import RecipesLoading from "@/components/loading/recipes-loading/recipes-loading.component";

export default function Home(): ReactNode {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <section className={styles["hero-image-wrapper"]}>
          <div className={styles.overlay}></div>
          <h1>Cook Something Amazing Today</h1>
          <p>
            Browse a collection of sweet and savory recipes, baking inspiration,
            and comforting homemade dishes crafted for every food lover.
          </p>
          <Image src={heroImage} alt="" fill style={{ objectFit: "cover" }} />
        </section>
      </section>
      <Suspense fallback={<RecipesLoading />}>
        <Recipes />
      </Suspense>
    </div>
  );
}
