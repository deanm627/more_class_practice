'use strict';

const results = document.getElementById('results');
const title = document.getElementById('title');

function appendDOM(text) {
    const p = document.createElement('p');
    p.innerText = text;
    results.appendChild(p);
};

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

    attack(attacker) {
        this.health = this.health - attacker.power;
        appendDOM(`${attacker.characterName} attacks ${this.characterName}.\nNew health value for ${this.characterName} is ${this.health}.`);
    }
};

class Hero extends Warrior {
    announce() {
        appendDOM(`"Greetings. Your hero, ${this.characterName}, has arrived!"`);
    }
};

class Villian extends Warrior {
    taunt() {
        appendDOM(`"Lol. I, ${this.characterName}, am stronger than you all!"`);
    }
};

const eleven = new Hero('Eleven');
const one = new Villian('One');

Warrior.welcomeMessage();
eleven.announce();
one.taunt();
one.attack(eleven);
eleven.attack(one);