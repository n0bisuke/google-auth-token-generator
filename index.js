'use strict';

const fs = require('fs');

const oAuth2ClientGen = (options) => {
    const google = options.library;
    const CREDENTIALS_PATH = options.CREDENTIALS_PATH || 'credentials.json';
    const TOKEN_PATH = options.TOKEN_PATH || 'token.json';

    const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'));

    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
    oAuth2Client.setCredentials(token);

    return oAuth2Client;
};

module.exports = {
    oAuth2ClientGen: oAuth2ClientGen
}