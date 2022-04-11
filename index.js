'use strict';

const fs = require('fs');

const oAuth2ClientGen = (options) => {
    let credentials = {};
    let token = {};

    const google = options.library;

    if(options.CREDENTIALS && options.TOKEN){
        //文字列指定
        const CREDENTIALS = options.CREDENTIALS;
        const TOKEN = options.TOKEN;
        credentials = JSON.parse(CREDENTIALS);
        token = JSON.parse(TOKEN);
    }else{
        //ファイル指定
        const CREDENTIALS_PATH = options.CREDENTIALS_PATH || 'credentials.json';
        const TOKEN_PATH = options.TOKEN_PATH || 'token.json';
        credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
        token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'));
    }

    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, `urn:ietf:wg:oauth:2.0:oob`);
    oAuth2Client.setCredentials(token);

    return oAuth2Client;
};

module.exports = {
    oAuth2ClientGen: oAuth2ClientGen
}