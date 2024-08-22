const mythicalCreatures = [
	{ name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
	{ name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
	{ name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
	{ name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
	{ name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" }
];
const findingWater = mythicalCreatures.find(function (element) {
	return element.type === "Water";
});
console.log(findingWater);

const findingGriffin = mythicalCreatures.findIndex(function (element) {
	return element.name === "Griffin";
});
console.log(findingGriffin);
const lastSeenEnchanted = mythicalCreatures.find(function (element) {
	return element.lastSeen[0];
});
console.log(lastSeenEnchanted);