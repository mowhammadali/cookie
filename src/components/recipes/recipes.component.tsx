import { type ReactNode } from "react";
import styles from "./recipes.module.css";
import Recipe from "@/components/recipe/recipe.component";

export type RecipeType = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

type RecipesResponseType = {
  recipes: RecipeType[];
  total: number;
  skip: number;
  limit: number;
};

export default async function Recipes(): Promise<ReactNode> {
  const data = await fetch("https://dummyjson.com/recipes?delay=1000", {
    cache: "no-store",
  });
  const recipesResponse: RecipesResponseType = await data.json();

  const { recipes } = recipesResponse;

  return (
    <div className={styles.recipes}>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}
