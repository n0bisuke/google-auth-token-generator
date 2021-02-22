'use strict'

const permissions = {

    GoogleDrive: {
        reference: `https://developers.google.com/drive/api/v3/about-auth`,
        list: [
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
        ]
    },

    Gmail: {
        reference: `https://developers.google.com/identity/protocols/oauth2/scopes#gmail`,
        list: [
            `https://mail.google.com/`,
            `https://www.googleapis.com/auth/gmail.addons.current.action.compose`,
            `https://www.googleapis.com/auth/gmail.addons.current.message.action`,
            `https://www.googleapis.com/auth/gmail.addons.current.message.metadata`,
            `https://www.googleapis.com/auth/gmail.addons.current.message.readonly`,
            `https://www.googleapis.com/auth/gmail.compose`,
            `https://www.googleapis.com/auth/gmail.insert`,
            `https://www.googleapis.com/auth/gmail.labels`,
            `https://www.googleapis.com/auth/gmail.metadata`,
            `https://www.googleapis.com/auth/gmail.modify`,
            `https://www.googleapis.com/auth/gmail.readonly`,
            `https://www.googleapis.com/auth/gmail.send`,
            `https://www.googleapis.com/auth/gmail.settings.basic`,
            `https://www.googleapis.com/auth/gmail.settings.sharing`,
        ]
    },

    GoogleCalendar: {
        reference: `https://developers.google.com/calendar/auth`,
        list: [
            `https://www.googleapis.com/auth/calendar`,
            `https://www.googleapis.com/auth/calendar.readonly`,
            `https://www.googleapis.com/auth/calendar.events`,
            `https://www.googleapis.com/auth/calendar.events.readonly`,
            `https://www.googleapis.com/auth/calendar.settings.readonly`,
            `https://www.googleapis.com/auth/calendar.addons.execute`
        ]
    },
}

module.exports = permissions;