/*

Object-Oriented JS – Design a Simple Game Inventory System
Prompt:
Design a simple inventory system for a game character. You need to support the following:

Add an item (item has name, type, and value)

Remove an item by name

List all items of a given type (e.g., all "weapons")

*/

class Item {
    constructor(name, type, value) {
        this.name = name
        this.type = type
        this.value = value
    }
}

class Inventory {
    constructor() {
        this.items = []
    }

    addItem(item) {
        this.items.push(item);
        console.log("Item added - ", item.name);
    }

    removeItemByName(name) {
        const index = this.items.findIndex(item => item.name === name)
        if (index !== -1) {
            const removed = this.items.splice(index, 1)
        } else {
            console.log("Item not found");
        }
    }

    listItemByType(type) {
        return this.items.filter(item => item.type === type)
    }

    printInventory() {
        this.items.forEach(item => {
            console.log(item.name, " - ", item.type, " - ", item.value);
        })
    }
}

const sword = new Item("Excalibur", "weapon", 300);
const potion = new Item("Health Potion", "consumable", 50);
const shield = new Item("Iron Shield", "armor", 150);
const bow = new Item("Longbow", "weapon", 200);

const inventory = new Inventory();

inventory.addItem(sword);
inventory.addItem(potion);
inventory.addItem(shield);
inventory.addItem(bow);

inventory.printInventory();

console.log("\nWeapons Only:");
console.log(inventory.listItemByType("weapon"));

inventory.removeItemByName("Excalibur");

inventory.printInventory();