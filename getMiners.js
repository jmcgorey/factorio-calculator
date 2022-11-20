var MINER_BURNER = 0.25;
var MINER_ELECTRIC = 0.5;
function getNeededMiners(itemsPerSecond, itemsMinedPerSecond) {
    return itemsPerSecond / itemsMinedPerSecond;
}
var args = process.argv;
var numItemsNeededPerSecond = parseInt(args[2], 10); // node filename arg
console.log("".concat(getNeededMiners(numItemsNeededPerSecond, MINER_ELECTRIC), " electric miners are needed to obtain ").concat(numItemsNeededPerSecond, " ore per second."));
