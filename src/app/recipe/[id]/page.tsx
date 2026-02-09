import { type ReactNode } from "react";
import { type RecipeType } from "@/components/recipes/recipes.component";
import { v4 as uuidv4 } from "uuid";
import styles from "./page.module.css";
import Button from "@/components/shared/button/button.component";
import Link from "next/link";

export default async function RecipePage({
  params,
}: {
  params: { id: string };
}): Promise<ReactNode> {
  const { id } = await params;

  const data = await fetch(`https://dummyjson.com/recipes/${id}`, {
    cache: "no-cache",
  });
  const recipeResponse: RecipeType = await data.json();

  return (
    <div className={styles.recipe}>
      <h3>{recipeResponse.name}</h3>
      <div className={styles.ingredients}>
        <p>Ingredients</p>
        <ul className={styles["ingredients-list"]}>
          {recipeResponse.ingredients.map((ingredient) => (
            <li key={uuidv4()}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className={styles.instructions}>
        <p>Ingredients</p>
        <ul className={styles["instructions-list"]}>
          {recipeResponse.instructions.map((instruction) => (
            <li key={uuidv4()}>{instruction}</li>
          ))}
        </ul>
      </div>
      <p>
        <span className={styles.title}>Difficulty:</span>{" "}
        {recipeResponse.difficulty}
      </p>
      <p>
        <span className={styles.title}>Cuisine:</span> {recipeResponse.cuisine}
      </p>
      <p>
        <span className={styles.title}>Calories per serving:</span>{" "}
        {recipeResponse.caloriesPerServing}
      </p>
      <p>
        <span className={styles.title}>Preparation time in minutes:</span>{" "}
        {recipeResponse.prepTimeMinutes}m
      </p>
      <p>
        <span className={styles.title}>Cook time in minutes:</span>{" "}
        {recipeResponse.cookTimeMinutes}m
      </p>
      <Button>
        <Link href="/">Back</Link>
      </Button>
    </div>
  );
}
