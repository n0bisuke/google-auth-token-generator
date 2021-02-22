#!/usr/bin/env node
'use strict'

const fs = require('fs');

const permissions = require('./permissions');
const authorize = require('./authorize');

const gdriveList = permissions.GoogleDrive.map(item => {return {name: item}});

const inquirer = require("inquirer");

(async () => {
    console.log('Google API Token Generator');

    try {
        //read file
        const credentials = await fs.readFileSync('credentials.json', 'utf8');
        
        //API Select
        const answers1st = await inquirer.prompt([{
            type: 'list',
            name: 'API',
            message: 'Which one do you use?',
            choices: [
                'Google Drive',
                // 'Gmail',
                // ''
            ],
            filter: function( val ) { return val.toLowerCase(); }
        }]);

        //Permission Select
        const answers2nd = await inquirer.prompt([{
            type: "checkbox",
            message: "Select Permissions",
            name: "Permissions",
            choices: gdriveList,
            validate: ( answer ) => {
                if(answer.length < 1) return "You must choose at least one topping.";
                return true;
            }
        }],( answers ) => console.log( JSON.stringify(answers, null, "  ")));
        
        // console.log(answers2nd);

        const auth = await authorize(JSON.parse(credentials), answers2nd.Permissions);
        console.log(auth);

    } catch (error) {
        throw new Error(error);
    }

})();