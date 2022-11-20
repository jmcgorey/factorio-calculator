export interface Recipe {
	/** The identifier of the recipe */
	recipeId: string;
	/** The human-readable name of the item */
	name: string;
	/** The number of seconds it takes to complete one crafting operation */
	secondsToCraft: number;
	/** The number of items created by one crafting operation */
	numberCreated: number;
	/** The list of ingredients required to complete one crafting operation */
	ingredients: Ingredient[];
}

export interface Ingredient {
	/** The identifier of the required ingredient */
	ingredientId: string;
	/** The number of this type of ingredient needed to complete one crafting operation */
	quantity: number;
}
