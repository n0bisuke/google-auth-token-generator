#!/usr/bin/env node
'use strict'

const fs = require('fs');

const permissions = require('./permissions');
const authorize = require('./authorize');

const inquirer = require("inquirer");

(async () => {
    console.log('Google API Token Generator.');

    try {
        //read file
        const credentials = await fs.readFileSync('credentials.json', 'utf8');
        
        //API Select
        const answers1st = await inquirer.prompt([{
            type: 'list',
            name: 'API',
            message: 'Which one do you use?',
            choices: Object.keys(permissions),
            //filter: val => val.toLowerCase()
        }]);

        // console.log(answers1st.API,permissions[`${answers1st.API}`]);

        const permissionsList = permissions[answers1st.API].list.map(item => {return {name: item}});

        //Permission Select
        const answers2nd = await inquirer.prompt([{
            type: 'checkbox',
            message: `Select Permissions (see: ${permissions[answers1st.API].reference})`,
            name: 'Permissions',
            choices: permissionsList,
            validate: ( answer ) => {
                if(answer.length < 1) return "You must choose at least one topping.";
                return true;
            }
        }],( answers ) => console.log( JSON.stringify(answers, null, "  ")));
        
        // console.log(answers2nd);

        const auth = await authorize(JSON.parse(credentials), answers2nd.Permissions);
        // console.log(auth);
    
    } catch (error) {
        // console.log(`ほげ:`,error.message);
        if(error.code === 'ENOENT'){
            console.log(`---------------`);
            console.log(`ERROR: Can not open credentials.json. Get credentials.json first from the Google API site.`);
            console.log(`---------------`);
        }

        throw new Error(error);
    }

})();