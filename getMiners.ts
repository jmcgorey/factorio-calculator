const MINER_BURNER = 0.25;
const MINER_ELECTRIC = 0.5;
function getNeededMiners(itemsPerSecond: number, itemsMinedPerSecond: number) {
	return itemsPerSecond / itemsMinedPerSecond;
}

const args = process.argv;
const numItemsNeededPerSecond = parseInt(args[2], 10); // node filename arg

console.log(`${getNeededMiners(numItemsNeededPerSecond as number, MINER_ELECTRIC)} electric miners are needed to obtain ${numItemsNeededPerSecond} ore per second.`);