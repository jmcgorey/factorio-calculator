var ASSEMBLER_1 = 0.5;
var ASSEMBLER_2 = 0.75;
var ASSEMBLER_3 = 1.25;
var FURNACE_STONE = 1;
var FURNACE_STEEL = 2;
var FURNACE_ELECTRIC = 2;
function getNeededManufacturers(itemsPerSecond, recipe, craftingSpeed) {
    return ((itemsPerSecond * (recipe.craftingTime / recipe.quantity)) /
        craftingSpeed);
}
var sciencePacks = [
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
var ITEMS_PER_SECOND = 1;
var CRAFTING_SPEED = ASSEMBLER_2;
console.log("----------------------------");
console.log("Calculating Science Output for:");
console.log("".concat(ITEMS_PER_SECOND, " packs per second"));
console.log("Crafting speed of ".concat(CRAFTING_SPEED));
console.log("-------------------------------");
for (var _i = 0, sciencePacks_1 = sciencePacks; _i < sciencePacks_1.length; _i++) {
    var scienceRecipe = sciencePacks_1[_i];
    console.log("".concat(scienceRecipe.name, " - ").concat(getNeededManufacturers(ITEMS_PER_SECOND, scienceRecipe, CRAFTING_SPEED), " assemblers"));
}
console.log("Num assembers for 1 Red Science/Sec: " +
    getNeededManufacturers(1, { craftingTime: 5, quantity: 1 }, 0.5));
console.log("Num Assembers for 15 Green Circuits/Sec: " +
    getNeededManufacturers(15, { craftingTime: 0.5, quantity: 1 }, 0.75));
console.log("Num Assemblers for prod1 modules, .48 a second: " +
    getNeededManufacturers(0.476190476, { craftingTime: 15, quantity: 1 }, 0.75));
