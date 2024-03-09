const fs = require('fs');
const inquirer = require('inquirer');
const shapesJS = require('./lib/shapes')

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter logo text (up to three characters):'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color name or hexadecimal number:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color name or hexadecimal number:'
    },
]

function writeToFile(data) {

}