#! /usr/bin/env node 
import chalk from "chalk";
import inquirer from "inquirer";
// make the classes player or opponent 
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
;
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
;
// player name and opponent select
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "please Enter your Name?"
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "please select your opponent",
        choices: ["Skeleton", "Assassin", "Zombie"]
    }
]);
// gather data 
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select === "Skeleton") {
        console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)} `);
        let ask = await inquirer.prompt([
            {
                name: "opt", // opt  means option
                type: "list",
                message: "please select your opponent",
                choices: ["Attack", "Drink Portion", "Run For Your Life..."]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.red("You Are Loose Good Luck For The Next Time"));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.green("You Are Winner "));
                    process.exit();
                }
            }
            ;
            o1;
        }
        ;
        if (ask.opt === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you Drink  Health Portion Your Fuel Is ${p1.fuel}`));
        }
        ;
        if (ask.opt === "Run For Your Life...") {
            console.log(chalk.bold.italic.red("You Are Loose Good Luck For The Next Time"));
            process.exit();
        }
        ;
    }
    // Assasin....
    if (opponent.select === "Assassin") {
        console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)} `);
        let ask = await inquirer.prompt([
            {
                name: "opt", // opt  means option
                type: "list",
                message: "please select your opponent",
                choices: ["Attack", "Drink Portion", "Run For Your Life..."]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.red("You Are Loose Good Luck For The Next Time"));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.green("You Are Winner "));
                    process.exit();
                }
            }
            ;
            o1;
        }
        ;
        if (ask.opt === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you Drink  Health Portion Your Fuel Is ${p1.fuel}`));
        }
        ;
        if (ask.opt === "Run For Your Life...") {
            console.log(chalk.bold.italic.red("You Are Loose Good Luck For The Next Time"));
            process.exit();
        }
        ;
    }
    // zombie
    if (opponent.select === "Zombie") {
        console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)} `);
        let ask = await inquirer.prompt([
            {
                name: "opt", // opt  means option
                type: "list",
                message: "please select your opponent",
                choices: ["Attack", "Drink Portion", "Run For Your Life..."]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.red("You Are Loose Good Luck For The Next Time"));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.italic.green("You Are Winner "));
                    process.exit();
                }
            }
            ;
            o1;
        }
        ;
        if (ask.opt === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you Drink  Health Portion Your Fuel Is ${p1.fuel}`));
        }
        ;
        if (ask.opt === "Run For Your Life...") {
            console.log(chalk.bold.italic.red("You Are Loose!!.. Good Luck For The Next Time"));
            process.exit();
        }
        ;
    }
} while (true);
