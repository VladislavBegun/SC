let protectPercent;

class Human {
    constructor(name, damage, armor) {
        this.hp = 100;
        this.stamina = 100;
        this.isAttack = false;
        this.armor = armor;
        this.damage = damage;
        this.name = name;
        this.arr = [1, 2, 3, 3];
    }
    Action(enemy) {
        let value = (this.stamina < 20) ?
            ((this.stamina < 10) ? 1 : 2 + Math.round(Math.random())) : ((enemy.isAttack) ?
                this.arr[Math.round(Math.random() * 3)] :
                1 + Math.round(Math.random()));
        switch (value) {
            case 1:
                this.Attack(enemy);
                break;
            case 2:
                this.NoneAction();
                break;
            case 3:
                this.Defense(enemy);
                break;
        }
    }
    NoneAction() {
        console.log(`${this.name} did no action`);
        this.stamina += 20;
        if (this.stamina > 100)
            this.stamina = 100;
    }
    Defense(enemy) {
        if (enemy.isAttack) {
            protectPercent = (this.armor > 0) ? 15 : 0;
            this.armor += protectPercent;
            this.hp += (enemy.damage - protectPercent);
            this.stamina -= 5;
        }
        console.log(`${this.name} is defense`);
    }
    Attack(enemy) {
        this.isAttack = true;
        console.log(`${this.name} is attack`);
        protectPercent = (enemy.armor > 0) ? 15 : 0;
        enemy.armor -= protectPercent;
        enemy.hp -= (this.damage - protectPercent);
        if (!(enemy.hp > 0))
            enemy.hp = 0;
        this.stamina -= 10;
    }
    isDeath() {
        if (!this.hp) {
            console.log(`${this.name} is death...`);
            return true;
        }
        return false;
    }
}

class HeavyWarrior extends Human {
    constructor(name) {
        super(name, 20, 100);
    }
}

class Knight extends Human {
    constructor(name) {
        super(name, 30, 50);
    }
}

class SwordBearer extends Human {
    constructor(name) {
        super(name, 40, 0);
    }
}

let FirstWarrior, SecondWarrio, TheEnd = false;

async function fight(FirstWarrior, SecondWarrior) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            switch (Math.round(Math.random())) {
                case 0:
                    FirstWarrior.Action(SecondWarrior);
                    break;
                case 1:
                    SecondWarrior.Action(FirstWarrior);
                    break;
            }
            if (FirstWarrior.isDeath() || SecondWarrior.isDeath()) {
                TheEnd = true;
                return;
            }
            if (FirstWarrior.isAttack || SecondWarrior.isAttack) {
                if (FirstWarrior.isAttack)
                    FirstWarrior.isAttack = false;
                else
                    SecondWarrior.isAttack = false;
            }
            resolve();
        }, 1000);
    })

}

async function main() {
    while (!TheEnd) {
        console.log(`\n-----------------\n${FirstWarrior.name} - ${FirstWarrior.hp} hp\n${SecondWarrior.name} - ${SecondWarrior.hp} hp\n-----------------\n`);
        await fight(FirstWarrior, SecondWarrior);
    }
}

// Выберите класс война

// Первый воин
switch () {
    case 1:
        FirstWarrior = new HeavyWarrior("first warrior");
        break;
    case 2:
        FirstWarrior = new Knight("first warrior");
        break;
    case 3:
        FirstWarrior = new SwordBearer("first warrior");
        break;
}

// Второй воин
switch () {
    case 1:
        SecondWarrior = new HeavyWarrior("second warrior");
        break;
    case 2:
        SecondWarrior = new Knight("second warrior");
        break;
    case 3:
        SecondWarrior = new SwordBearer("second warrior");
        break;
}

main();
