
[![Image from Gyazo](https://i.gyazo.com/92b73b1253594a5c39761079492cb9da.gif)](https://gyazo.com/92b73b1253594a5c39761079492cb9da)

## google-auth-token-generator

Gooogle系APIのtoken.jsonを取得するためのCLIツールです。
npx経由で実行すればインストール不要です。

* Google Drive
* Gmail
* Google Calender
* Youtube Data API
* Google Sheets

に対応しています。(2021/5/3時点)

## 使い方

* 1. CLIツールとして、token.jsonの生成が出来ます。
* 2. oAuthClientの生成関数のモジュールとして利用できます。

### 1. token.jsonの生成 

* 1. Googleのサイトから利用したいAPIの`credentials.json`を取得します。
* 2. `npx google-auth-token-generator`を実行します。
* 3. `token.json`が生成されます

### 2. oAuthClientの生成モジュール

読み込みます。[googleapis](https://github.com/googleapis/google-api-nodejs-client)も追加でインストールしましょう。

```js
const {google} = require('googleapis');
const {oAuth2ClientGen} = require('google-auth-token-generator');
```

利用する際は以下のように読み込みます。
ファイル名は任意に変更できますがcredentials.jsonとtoken.jsonがデフォルトです。

```js
const auth = oAuth2ClientGen({
    library: google,
    CREDENTIALS_PATH: `credentials.json`, // optional
    TOKEN_PATH: 'token.json'; // optional
});
```

#### Google Spread SheetsのAPI利用サンプル

```js
'use strict';

const {google} = require('googleapis');
const {oAuth2ClientGen} = require('google-auth-token-generator');

(async () => {
    const auth = oAuth2ClientGen({library: google});
    const sheets = google.sheets({version: 'v4', auth});

    try {
        const res = await sheets.spreadsheets.values.get({
            spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
            range: 'Class Data!A2:E',
        });

        const rows = res.data.values;
        if (rows.length) {
          console.log('Name, Major:');
          // Print columns A and E, which correspond to indices 0 and 4.
          rows.map((row) => {
            console.log(`${row[0]}, ${row[4]}`);
          });
        } else {
          console.log('No data found.');
        }

    } catch (error) {
        console.log('The API returned an error: ' + error);
    }
})();
```

## how to use

* 1. Get `credentials.json` first from the Google API site.
* 2. run `npx google-auth-token-generator`
* 3. A `token.json` file will be generated.

