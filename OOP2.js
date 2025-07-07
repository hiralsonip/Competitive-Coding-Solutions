class candy {
    constructor(color, weight) {
        this.color = color
        this.weight = weight
    }
}

class candyBag {
    constructor() {
        this.bag = []
    }

    addCandy(candy) {
        this.bag.push(candy)
        console.log("Candy added");
    }

    getCandyByColor(color) {
        return this.bag.filter(candy => candy.color === color)
    }

    getRandomCandy() {
        if (!this.bag.length) return "No cany available"

        let max = this.bag.length - 1;
        let random = Math.floor(Math.random() * max);

        let temp = this.bag[random];
        this.bag.splice(random, 1)

        return temp;
    }

    showAllCandy() {
        let s = "\nLIST OF CANDY \n";
        let count = 0;
        this.bag.map(candy => {
            s += ++count + " | " + candy.color + " - " + candy.weight + "\n"
        })
        return s
    }

}

const candy1 = new candy("Blue", 12);
const candy2 = new candy("Red", 13);
const candy3 = new candy("Green", 15);
const candy4 = new candy("Blue", 17);
const candy5 = new candy("Red", 19);

const bag = new candyBag();
bag.addCandy(candy1)
bag.addCandy(candy2)
bag.addCandy(candy3)
bag.addCandy(candy4)
bag.addCandy(candy5)

console.log(bag.showAllCandy())

const blueCandies = bag.getCandyByColor("Blue")
console.log(blueCandies);

console.log(bag.showAllCandy())

const randomCandy1 = bag.getRandomCandy();
console.log(randomCandy1);

console.log(bag.showAllCandy())

const randomCandy2 = bag.getRandomCandy();
console.log(randomCandy2);

console.log(bag.showAllCandy())

const randomCandy3 = bag.getRandomCandy();
console.log(randomCandy3);

console.log(bag.showAllCandy())

const randomCandy4 = bag.getRandomCandy();
console.log(randomCandy4);

const randomCandy5 = bag.getRandomCandy();
console.log(randomCandy5);

const randomCandy6 = bag.getRandomCandy();
console.log(randomCandy6);


import React from 'react'

const OOP2 = () => {
    return (
        <div>OOP2</div>
    )
}

export default OOP2