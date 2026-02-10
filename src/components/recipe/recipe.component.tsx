import { type ReactNode } from "react";
import { type RecipeType } from "@/components/recipes/recipes.component";
import Image from "next/image";
import Link from "next/link";
import styles from "./recipe.module.css";
import MingcuteStarFill from "@/icons/MingcuteStarFill";
import MingcuteAlarm2Fill from "@/icons/MingcuteAlarm2Fill";
import MaterialSymbolsForkSpoonRounded from "@/icons/MaterialSymbolsForkSpoonRounded";
import Button from "@/components/shared/button/button.component";

export default function Recipe(props: RecipeType): ReactNode {
  return (
    <article className={styles.recipe}>
      <div className={styles["recipe-image-wrapper"]}>
        <Image
          src={props.image}
          alt={props.name}
          fill
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
        <div className={styles.rating}>
          {props.rating}
          <MingcuteStarFill color="var(--yellow-400)" />
        </div>
      </div>
      <p className={styles.title}>{props.name}</p>
      <div className={styles.info}>
        <MingcuteAlarm2Fill />
        <p>Preparation Time in Minutes: </p>
        {props.prepTimeMinutes}
      </div>
      <div className={styles.info}>
        <MaterialSymbolsForkSpoonRounded />
        <p>Cook Time in Minutes: </p>
        {props.cookTimeMinutes}
      </div>
      <Button>
        <Link href={`/recipe/${props.id}`}>Show Recipe</Link>
      </Button>
    </article>
  );
}
