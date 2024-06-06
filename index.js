import fs from 'fs';
import inquirer from 'inquirer';
import { generateSVG } from './lib/shapes.js';
import path from 'path';

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter logo text (up to three characters):',
        validate: input => input.length <= 3 || 'Text must be three characters or less'
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
];

function writeToFile(data) {
    const svgMarkup = generateSVG(data);
    const filePath = path.join('examples', 'logo.svg');
    fs.writeFileSync(filePath, svgMarkup);
    console.log('Generated logo.svg in the examples folder');
}

inquirer.prompt(questions).then(writeToFile).catch(error => {
    console.error('Error:', error);
});
