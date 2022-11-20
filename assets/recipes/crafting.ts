import type { Recipe } from "../../types/recipeTypes";

export const CRAFTING_RECIPES: Recipe[] = [
	{
		name: "Wooden Chest",
		recipeId: "wooden_chest",
		secondsToCraft: 0.5,
		numberCreated: 1,
		ingredients: [
			{
				ingredientId: "wood",
				quantity: 2
			}
		]
	},
	{
		name: "Iron Chest",
		recipeId: "iron_chest",
		secondsToCraft: 0.5,
		numberCreated: 1,
		ingredients: [
			{
				ingredientId: "iron_plate",
				quantity: 8
			}
		]
	},
	{
		name: "Steel Chest",
		recipeId: "steel_chest",
		secondsToCraft: 0.5,
		numberCreated: 1,
		ingredients: [
			{
				ingredientId: "steel_plate",
				quantity: 8
			}
		]
	}
];
