const ASSEMBLER_1 = 0.5;
const ASSEMBLER_2 = 0.75;
const ASSEMBLER_3 = 1.25;
const FURNACE_STONE = 1;
const FURNACE_STEEL = 2;
const FURNACE_ELECTRIC = 2;
interface sciencePackRecipe {
	craftingTime: number;
	quantity: number;
}

function getNeededManufacturers(
	itemsPerSecond: number,
	recipe: sciencePackRecipe,
	craftingSpeed: number
): number {
	return (
		(itemsPerSecond * (recipe.craftingTime / recipe.quantity)) /
		craftingSpeed
	);
}

const sciencePacks = [
	{
		name: "Red",
		craftingTime: 5,
		quantity: 1
	},
	{
		name: "Green",
		craftingTime: 6,
		quantity: 1
	},
	{
		name: "Gray",
		craftingTime: 10,
		quantity: 2
	},
	{
		name: "Blue",
		craftingTime: 24,
		quantity: 2
	},
	{
		name: "Purple",
		craftingTime: 21,
		quantity: 3
	},
	{
		name: "Yellow",
		craftingTime: 21,
		quantity: 3
	}
];

const ITEMS_PER_SECOND = 1;
const CRAFTING_SPEED = ASSEMBLER_2;

console.log("----------------------------");
console.log("Calculating Science Output for:");
console.log(`${ITEMS_PER_SECOND} packs per second`);
console.log(`Crafting speed of ${CRAFTING_SPEED}`);
console.log("-------------------------------");
for (const scienceRecipe of sciencePacks) {
	console.log(
		`${scienceRecipe.name} - ${getNeededManufacturers(
			ITEMS_PER_SECOND,
			scienceRecipe,
			CRAFTING_SPEED
		)} assemblers`
	);
}

console.log(
	"Num assembers for 1 Red Science/Sec: " +
		getNeededManufacturers(1, { craftingTime: 5, quantity: 1 }, 0.5)
);
console.log(
	"Num Assembers for 15 Green Circuits/Sec: " +
		getNeededManufacturers(15, { craftingTime: 0.5, quantity: 1 }, 0.75)
);
console.log(
	"Num Assemblers for prod1 modules, .48 a second: " +
		getNeededManufacturers(
			0.476190476,
			{ craftingTime: 15, quantity: 1 },
			0.75
		)
);
