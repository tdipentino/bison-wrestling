var Arrow = require('arrow');
var Model = Arrow.createModel('bison-league', {
    "fields": {
        "leagueYear": {
            "type": "number",
            "required": true
        },
        "league-name": {
            "type": "string",
            "required": true
        },
        "firstname": {
            "type": "string",
            "required": true
        },
        "lastname": {
            "type": "string",
            "required": true
        },
        "grade": {
            "type": "string",
            "required": true
        },
        "weight": {
            "type": "number",
            "required": true
        },
        "placement": {
            "type": "string",
            "required": true
        }
    },
    "connector": "appc.arrowdb",
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ],
    "description": "DB Used for Bison League placers"
});
module.exports = Model;
