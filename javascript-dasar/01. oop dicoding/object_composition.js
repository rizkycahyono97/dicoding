class Character {
    constructor(name, health, position) {
        this.name = name;
        this.health = health;
        this.position = position;
    }

    canMove() {
        console.log(`${this.name} moves to another position`)
    }
}

function canAttack(character) {
    return {
        attack: () => {
            console.log(`${character.name} attacks with a weapon`)
        }
    }
}

function canDefend(character) {
    return {
        defend: () => {
            console.log(`${console.log} defends with a shield`)
        }
    }
}

function canCastSpell(character) {
    return {
        castSpell: () => {
            console.log(`${character} cast a spell`)
        }
    }
}

function createMonster(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canDefend(character))
}

function createWizard(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character), canCastSpell(character))
}

function createWarrior(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character), canDefend(character))
}

function createGuardian(name) {
    const character = new Character(name, 120, 0);
    return Object.assign(character, canAttack(character), canCastSpell(character), canDefend(character))
}

const monster = new createMonster("monster")
monster.canMove()
monster.defend()

const guardian = createGuardian('Guardian');
guardian.canMove();
guardian.defend();

const wizard = createWizard('Wizard');
wizard.canMove();
wizard.castSpell();

const warrior = createWarrior('Warrior');
warrior.canMove();
warrior.attack();
warrior.defend();