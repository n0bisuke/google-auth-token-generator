'use strict'

const TOKEN_PATH = 'token.json';

const {google} = require('googleapis');
const fs = require('fs');
const inquirer = require('inquirer');

const authorize = async (credentials, SCOPES) => {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, 'urn:ietf:wg:oauth:2.0:oob');

    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });

    console.log('Authorize this app by visiting this url:', authUrl);

    const code = await inquirer.prompt([{
        type: 'input',
        name: 'code',
        message: 'Enter the code from that page here:'
    }]);
    
    oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error('Error retrieving access token', err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) return console.error(err);
          console.log('Token stored to', TOKEN_PATH);
          console.log(token);
        });
    });
}

module.exports = authorize;