#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    { message: "Enter your firstNumber", type: "number", name: "firstNumber" },
    { message: "Enter your secondNumber", type: "number", name: "secondNumber" },
    {
        message: "Select one operator to perform action",
        type: "list",
        name: "operators",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Modulus",
            "Exponentiation",
            "Unary",
        ],
    },
]);
//conditional statements
if (answers.operators === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operators === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operators === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operators === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else if (answers.operators === "Modulus") {
    console.log(answers.firstNumber % answers.secondNumber);
}
else if (answers.operators === "Exponentiation") {
    console.log(answers.firstNumber ** answers.secondNumber);
}
else if (answers.operators === "Unary") {
    console.log(answers.firstNumber * -1);
}
else {
    "Please select correct operator";
}
