'use strict'

const permissions = {
    GoogleDrive: [
        `https://www.googleapis.com/auth/drive.appdata`,
        `https://www.googleapis.com/auth/drive.file`,
        `https://www.googleapis.com/auth/drive.install`,
        `https://www.googleapis.com/auth/drive.apps.readonly`,
        `https://www.googleapis.com/auth/drive.metadata`,
        `https://www.googleapis.com/auth/drive`,
        `https://www.googleapis.com/auth/drive.activity`,
        `https://www.googleapis.com/auth/drive.activity.readonly`,
        `https://www.googleapis.com/auth/drive.readonly`,
        `https://www.googleapis.com/auth/drive.metadata.readonly`,
        `https://www.googleapis.com/auth/drive.scripts`
    ],
    Gmail: [],
    GoogleCalendar: [],
}

module.exports = permissions;