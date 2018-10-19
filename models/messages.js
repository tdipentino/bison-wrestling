var Arrow = require('arrow');
var Model = Arrow.createModel('messages', {
    "description": "DB used to store contact us messages",
    "connector": "appc.arrowdb",
    "fields": {
        "name": {
            "type": "string",
            "description": "Name used on message",
            "required": true
        },
        "email-address": {
            "type": "string",
            "description": "Email address used for messages",
            "required": true
        },
        "phone-number": {
            "type": "string",
            "description": "Phone number used for messages",
            "required": true
        },
        "message": {
            "type": "string",
            "description": "Message",
            "required": true
        },
        "datecreated": {
            "type": "date",
            "description": "Date the message was sent",
            "required": true
        }
    },
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ]
});
module.exports = Model;