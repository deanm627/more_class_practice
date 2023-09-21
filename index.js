'use strict';

const results = document.getElementById('results');
const title = document.getElementById('title');

function appendDOM(text, className) {
    const message = document.createElement('div');
    message.classList.add(className);
    message.classList.add('message');
    message.innerText = text;
    results.appendChild(message);
};

let trackState = {hero: null, villain: null};

class Warrior {
    constructor(characterName, details, health = 10, power = 5) {
        this.characterName = characterName;
        this.health = health;
        this.power = power;
    }

    static welcomeMessage() {
        const h1 = document.createElement('h1');
        h1.innerText = 'Welcome to the Warrior Game';
        title.append(h1);
    }

    greet() {
        appendDOM(`"Hello, my name is ${this.characterName}"`);
    }

    attackedBy(attacker) {
        this.health = this.health - attacker.power;
        appendDOM(`${attacker.characterName} attacks ${this.characterName}.`, attacker.warriorType);
        appendDOM(`New health value for ${this.characterName} is ${this.health}.`, this.warriorType);
    }

    alive() {
        return this.health > 0;
    }
};

class Hero extends Warrior {
    constructor(characterName, details, health, power, warriorType) {
        super(characterName, details, health, power);
        this.warriorType = warriorType;
    }
    announce() {
        appendDOM(`"Greetings. Your hero, ${this.characterName}, has arrived!"`, this.warriorType);
    }
};

class Villain extends Warrior {
    constructor(characterName, details, health, power, warriorType) {
        super(characterName, details, health, power);
        this.warriorType = warriorType;
    }
    taunt() {
        appendDOM(`"Lol. I, ${this.characterName}, am stronger than you all!"`, this.warriorType);
    }
};

class Zombie extends Villain {
    alive() {
        return true;
    }
}

const eleven = new Hero('Eleven', null, 10, 5, 'hero');
const one = new Villain('One', null, 10, 5, 'villain');
const zombie = new Zombie('Zombie', null, 10, 5, 'zombie');

Warrior.welcomeMessage();
eleven.announce();
one.taunt();
one.attackedBy(eleven);
eleven.attackedBy(one);
console.log(eleven.alive());
console.log(one.alive());
one.attackedBy(eleven);

let enemiesArr = [one, zombie];
let random = getRandomInt(enemiesArr.length);
console.log(random);
eleven.attackedBy(enemiesArr[random]);

trackState.hero = eleven;
trackState.villain = one;
console.log(trackState.hero.health);
console.log(trackState.villain.health);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }