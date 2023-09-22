'use strict';

const heroResult = document.getElementById('heroResult');
const villainResult = document.getElementById('villainResult');
const title = document.getElementById('title');
let trackState = {hero: null, villain: null};

const mrincredTheme = "Mr. Incredible, Incredible\nIncredible\nCatching the bad guys\nPow, pow, pow!";
const mrincredPic = "./images/mrincred.jpeg";
const elastigirlTheme = "Here comes Elastigirl\nStretching her arms, Elastigirl\nNo one's beyond her reach\nElastigirl!";
const elastigirlPic = "./images/elastigirl.jpeg";
const frozoneTheme = "Who's the cat who's always chill\nWhen survival odds are close to nil?\nFrozone, Frozone, Frozone!";
const frozonePic = "./images/frozone.jpeg";
const syndromeTheme = "Everyone can be super!\n And when everyone's super...\nno one will be.\nI'm Syndrome!";
const syndromePic = "./images/syndrome.jpeg";
const underminerTheme = "I'm the Underminer!\nMeet Jack Hammer!";
const underminerPic = "./images/underminer.jpeg";
const screenslaverTheme = "The Screenslaver interrupts\nthis program for an\nimportant announcement.";
const screenslaverPic = "./images/screenslaver.jpeg";

function appendDOM(text, className, location, imageref) {
    location.innerHTML = "";
    const caption = document.createElement('figcaption');
    caption.classList.add(className);
    caption.classList.add('caption');
    caption.innerText = text;
    const image = document.createElement('img');
    image.classList.add('image');
    image.src = imageref;
    location.appendChild(image);
    location.appendChild(caption);
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

document.addEventListener('DOMContentLoaded',() => {

    const pickPlayers = document.getElementById('pickPlayers');

    pickPlayers.addEventListener('submit',(event) => {
        event.preventDefault();
        const selectedHero = document.getElementById('heroList').value;
        const selectedVillain = document.getElementById('villainList').value;
        if (selectedHero === "Choose Hero" || selectedVillain === "Choose Villain") {
            notWarrior(pickPlayers);
            return;
        }
        let heroPic = "";
        let heroTheme = "";
        switch (selectedHero) {
            case 'Mr. Incredible':
                heroPic = mrincredPic;
                heroTheme = mrincredTheme;
                break;
            case 'Elastigirl':
                heroPic = elastigirlPic;
                heroTheme = elastigirlTheme;
                break;
            case 'Frozone':
                heroPic = frozonePic;
                heroTheme = frozoneTheme;
                break;
            default: 
                return;
        }
        let villainPic = "";
        let villainTheme = "";
        switch (selectedVillain) {
            case 'Syndrome':
                villainPic = syndromePic;
                villainTheme = syndromeTheme;
                break;
            case 'The Underminer':
                villainPic = underminerPic;
                villainTheme = underminerTheme;
                break;
            case 'Screenslaver':
                villainPic = screenslaverPic;
                villainTheme = screenslaverTheme;
                break;
            default:
                return;
        }
        const hero = new Hero(selectedHero, heroPic, 20, 5);
        const villain = new Villain(selectedVillain, villainPic, 20, 5);
        hero.announce(heroTheme);
        villain.taunt(villainTheme);
    });

    class Warrior {
        constructor(characterName, imageLink, health = 10, power = 5) {
            this.characterName = characterName;
            this.health = health;
            this.power = power;
            this.imageLink = imageLink;
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
        constructor(characterName, imageLink, health, power, warriorType = 'hero') {
            super(characterName, imageLink, health, power);
            this.warriorType = warriorType;
        }
        announce(theme) {
            appendDOM(theme, this.warriorType, heroResult, this.imageLink);
        }
    };

    class Villain extends Warrior {
        constructor(characterName, imageLink, health, power, warriorType = 'villain') {
            super(characterName, imageLink, health, power);
            this.warriorType = warriorType;
        }
        taunt(theme) {
            appendDOM(theme, this.warriorType, villainResult, this.imageLink);
        }
    };

    class Zombie extends Villain {
        alive() {
            return true;
        }
    }

    function notWarrior(form) {
        alert("Not a valid selection, please choose both characters");
        form.reset();
    }

    const eleven = new Hero('Eleven', null, 10, 5, 'hero');
    const one = new Villain('One', null, 10, 5, 'villain');
    const zombie = new Zombie('Zombie', null, 0, 5, 'zombie');

    console.log(zombie.alive());
    Warrior.welcomeMessage();
    // one.attackedBy(eleven);
    // eleven.attackedBy(one);
    // console.log(eleven.alive());
    // console.log(one.alive());
    // one.attackedBy(eleven);

    // let enemiesArr = [one, zombie];
    // let random = getRandomInt(enemiesArr.length);
    // console.log(random);
    // eleven.attackedBy(enemiesArr[random]);

    trackState.hero = eleven;
    trackState.villain = one;
    console.log(trackState.hero.health);
    console.log(trackState.villain.health);

});

