'use strict';

const characterDisplay = document.querySelector('.characterDisplay');
const pickPlayers = document.getElementById('pickPlayers');
const pickWeapon = document.getElementById('pickWeapon');
const results = document.getElementById('results');
const zombieModal = document.querySelector('.zombieModal');
const zombieOverlay = document.querySelector('.zombieOverlay');
const zombieCloseButton = document.querySelector('.zombieCloseButton');
const welcomeModal = document.querySelector('.welcomeModal');
const welcomeOverlay = document.querySelector('.welcomeOverlay');
const welcomeCloseButton = document.querySelector('.welcomeCloseButton');

let trackState = {hero: null, villain: null, zombie: null};

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
const zombiePic = "./images/zombie.jpeg";

function appendDOM(text, className, location, imageref, health, captionClass) {
    const figure = document.createElement('figure');
    figure.classList.add('figure', className);
    const image = document.createElement('img');
    image.classList.add('image');
    image.src = imageref;
    const caption = document.createElement('figcaption');
    caption.classList.add('caption', captionClass);
    caption.innerText = text;
    if (captionClass === "rpsPick") {
        caption.innerText = text + "!";
    }
    const healthInfo = document.createElement('p');
    healthInfo.classList.add('health');
    healthInfo.innerText = `Health: ${health} points`;
    figure.appendChild(image);
    figure.appendChild(caption);
    figure.appendChild(healthInfo);
    location.appendChild(figure);
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function produceResultsVillain(hero, villain, userPick, villainPick, points, outcome, fontSpecifier) {
    characterDisplay.innerHTML = "";
    hero.announce(userPick, fontSpecifier);
    villain.taunt(villainPick, fontSpecifier);
    results.innerText = "";
    if (userPick === villainPick) {
        outcome.innerText = "It's a tie! Play again";
        results.appendChild(outcome);
        return;
    }
    if (userPick === 'Rock' && villainPick === 'Paper') {
        outcome.innerText = "Paper covers rock! Your health took a hit!";
        results.appendChild(outcome);
        trackState.hero.health -= points;
        characterDisplay.innerHTML = "";
        hero.announce(userPick, fontSpecifier);
        villain.taunt(villainPick, fontSpecifier);
        return;
    }
    if (userPick === 'Rock' && villainPick === 'Scissors') {
        outcome.innerText = "Rock smashes scissors! You win this round!";
        results.appendChild(outcome);
        trackState.villain.health -= points;
        characterDisplay.innerHTML = "";
        hero.announce(userPick, fontSpecifier);
        villain.taunt(villainPick, fontSpecifier);
        return;
    }
    if (userPick === 'Paper' && villainPick === 'Rock') {
        outcome.innerText = "Paper covers rock! You win this round!";
        results.appendChild(outcome);
        trackState.villain.health -= points;
        characterDisplay.innerHTML = "";
        hero.announce(userPick, fontSpecifier);
        villain.taunt(villainPick, fontSpecifier);
        return;
    }
    if (userPick === 'Paper' && villainPick === 'Scissors') {
        outcome.innerText = "Scissors cut paper! Your health took a hit!";
        results.appendChild(outcome);
        trackState.hero.health -= points;
        characterDisplay.innerHTML = "";
        hero.announce(userPick, fontSpecifier);
        villain.taunt(villainPick, fontSpecifier);
        return;
    }
    if (userPick === 'Scissors' && villainPick === 'Rock') {
        outcome.innerText = "Rock smashes scissors! Your health took a hit!";
        results.appendChild(outcome);
        trackState.hero.health -= points;
        characterDisplay.innerHTML = "";
        hero.announce(userPick, fontSpecifier);
        villain.taunt(villainPick, fontSpecifier);
        return;
    }
    if (userPick === 'Scissors' && villainPick === 'Paper') {
        outcome.innerText = "Scissors cut paper! You win this round!";
        results.appendChild(outcome);
        trackState.villain.health -= points;
        characterDisplay.innerHTML = "";
        hero.announce(userPick, fontSpecifier);
        villain.taunt(villainPick, fontSpecifier);
        return;
    }
};

function produceResultsZombie(hero, zombie, userPick, villainPick, points, outcome, fontSpecifier) {
    console.log("produceresultszombie function called");
    characterDisplay.innerHTML = "";
    hero.announce(userPick, fontSpecifier);
    zombie.taunt(villainPick, fontSpecifier);
    results.innerText = "";
    if (userPick === villainPick) {
        outcome.innerText = "It's a tie! Play again";
        results.appendChild(outcome);
        return;
    }
    if (userPick === 'Rock' && villainPick === 'Paper') {
        outcome.innerText = "Paper covers rock! Your health took a hit!";
        results.appendChild(outcome);
        trackState.hero.health -= points;
        characterDisplay.innerHTML = "";
        hero.announce(userPick, fontSpecifier);
        zombie.taunt(villainPick, fontSpecifier);
        return;
    }
    if (userPick === 'Rock' && villainPick === 'Scissors') {
        outcome.innerText = "Rock smashes scissors! You win this round!";
        results.appendChild(outcome);
        trackState.hero.health += points / 2;
        characterDisplay.innerHTML = "";
        hero.announce(userPick, fontSpecifier);
        zombie.taunt(villainPick, fontSpecifier);
        return;
    }
    if (userPick === 'Paper' && villainPick === 'Rock') {
        outcome.innerText = "Paper covers rock! You win this round!";
        results.appendChild(outcome);
        trackState.hero.health += points / 2;
        characterDisplay.innerHTML = "";
        hero.announce(userPick, fontSpecifier);
        zombie.taunt(villainPick, fontSpecifier);
        return;
    }
    if (userPick === 'Paper' && villainPick === 'Scissors') {
        outcome.innerText = "Scissors cut paper! Your health took a hit!";
        results.appendChild(outcome);
        trackState.hero.health -= points;
        characterDisplay.innerHTML = "";
        hero.announce(userPick, fontSpecifier);
        zombie.taunt(villainPick, fontSpecifier);
        return;
    }
    if (userPick === 'Scissors' && villainPick === 'Rock') {
        outcome.innerText = "Rock smashes scissors! Your health took a hit!";
        results.appendChild(outcome);
        trackState.hero.health -= points;
        characterDisplay.innerHTML = "";
        hero.announce(userPick, fontSpecifier);
        zombie.taunt(villainPick, fontSpecifier);
        return;
    }
    if (userPick === 'Scissors' && villainPick === 'Paper') {
        outcome.innerText = "Scissors cut paper! You win this round!";
        results.appendChild(outcome);
        trackState.hero.health += points / 2;
        characterDisplay.innerHTML = "";
        hero.announce(userPick, fontSpecifier);
        zombie.taunt(villainPick, fontSpecifier);
        return;
    }
};

function testGameOver(hero, villain, outcome) {
    if (!hero.alive()) {
        results.innerText = "";
        outcome.innerText = "Game over. Better luck next time!";
        results.appendChild(outcome);
        pickPlayers.reset();
        pickWeapon.innerHTML = "";
        return;
    }
    if (!villain.alive()) {
        results.innerText = "";
        outcome.innerText = "You win! Congrats!";
        results.appendChild(outcome);
        pickPlayers.reset();
        pickWeapon.innerHTML = "";
        return;
    }
};

function modal(modalName, overlayName, buttonName) {
    modalName.classList.remove('hidden');
    overlayName.classList.remove('hidden');
    buttonName.addEventListener('click', () => {
        modalName.classList.add('hidden');
        overlayName.classList.add('hidden');
    });
};

function playGame(hero, villain, zombie) {
    const weaponList = document.createElement('select');
    weaponList.classList.add('select', 'singleList');
    const defaultOption = document.createElement('option');
    defaultOption.innerText = "Choose your weapon";
    const option1 = document.createElement('option');
    option1.innerText = "Rock";
    const option2 = document.createElement('option');
    option2.innerText = "Paper";
    const option3 = document.createElement('option');
    option3.innerText = "Scissors";
    weaponList.append(defaultOption,option1,option2,option3);
    pickWeapon.appendChild(weaponList);
    const button = document.createElement('button');
    button.id = "secondButton";
    button.type = "button";
    button.classList.add('button', 'select');
    button.innerText = "Let's go!";
    pickWeapon.appendChild(button);
    const optionsArr = [option1.innerText, option2.innerText, option3.innerText];
    const villainZombieArr = [villain, villain, villain, zombie];
    button.addEventListener('click', () => {
        if (weaponList.value === "Choose your weapon") {
            alert("Not a valid selection, please choose a weapon");
            pickWeapon.reset();
            return;
        }
        const randomNum1 = getRandomInt(optionsArr.length);
        const villainPick = optionsArr[randomNum1];
        const randomNum2 = getRandomInt(villainZombieArr.length);
        const outcome = document.createElement('p');
        outcome.classList.add('outcome');
        if (randomNum2 === 3) {
            modal(zombieModal, zombieOverlay, zombieCloseButton);
            produceResultsZombie(hero, zombie, weaponList.value, villainPick, trackState.zombie.power, outcome, "rpsPick");
            setTimeout(testGameOver, 500, hero, villain, outcome);
            return;
        }
        if (randomNum2 !== 3) {
            produceResultsVillain(hero, villain, weaponList.value, villainPick, trackState.villain.power, outcome, "rpsPick");
            setTimeout(testGameOver, 500, hero, villain, outcome);
            console.log(trackState.hero.health, trackState.villain.health);
            return;
        }
    });
};

document.addEventListener('DOMContentLoaded',() => {

    modal(welcomeModal, welcomeOverlay, welcomeCloseButton);

    pickPlayers.addEventListener('submit',(event) => {
        event.preventDefault();
        characterDisplay.innerHTML = "";
        pickWeapon.innerHTML = "";
        results.innerHTML = "";
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
        const hero = new Hero(selectedHero, heroPic, 30, 5);
        const villain = new Villain(selectedVillain, villainPic, 30, 5);
        const zombie = new Zombie('Zombie', zombiePic, "--", 10);
        hero.announce(heroTheme, "theme");
        villain.taunt(villainTheme, "theme");
        trackState.hero = hero;
        trackState.villain = villain;
        trackState.zombie = zombie;
        playGame(hero, villain, zombie);
    });

    class Warrior {
        constructor(characterName, imageLink, health = 10, power = 5) {
            this.characterName = characterName;
            this.health = health;
            this.power = power;
            this.imageLink = imageLink;
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
        announce(text, capClass) {
            appendDOM(text, this.warriorType, characterDisplay, this.imageLink, this.health, capClass);
        }
    };

    class Villain extends Warrior {
        constructor(characterName, imageLink, health, power, warriorType = 'villain') {
            super(characterName, imageLink, health, power);
            this.warriorType = warriorType;
        }
        taunt(text, capClass) {
            appendDOM(text, this.warriorType, characterDisplay, this.imageLink, this.health, capClass);
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

});