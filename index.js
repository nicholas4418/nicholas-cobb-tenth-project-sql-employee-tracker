//importing required packages
require("dotenv").config;
const inquirer = require("inquirer");
const mainTitle = require("asciiart-logo");
const dbEnq = require ("./assets/js/scripts");

const mainMenuArray = [
    {
        type: "list",
        name: "mainMenuOptions",
        message: "Welcome! Please select an action to perform: ",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update Employee Role",
            "Exit"
        ]
    }
];

function init() {
    console.log(mainTitle({
        name: "Employee Tracker"
    }).render());

    dbInit();
}


function dbInit() {
    inquirer.prompt(mainMenuArray).then((selection) => {
        dbEnq(selection.mainMenuOptions);
    });
}




init();
