class Heroes {
    #superAbility = 'running';
    constructor(name, drinkPortion) {
        this.numberOfLegs = 2;
        this.name = name;
        this.drinkPortion = drinkPortion;
    }

    move() {
        console.log('I am moving')
    }

    static run() {
        console.log(`I'm running`)
    }
}

const heroes = new Heroes('Assassin', 500);
console.log(heroes)

class Assassin extends Heroes {
    constructor(name, drinkPortion, weapon) {
        super(name, drinkPortion);
        this.weapon = weapon
    }
}
const assassin = new Assassin('Odyssey', 1000, 'knife');
console.log(assassin)

class SpiderMan extends Heroes {
    constructor(name, drinkPortion, superStreight) {
        super(name, drinkPortion);
        this.superStreight = superStreight;
    }
}

const spiderMan = new SpiderMan('Piter', 300, 'jump');
console.log(spiderMan)
