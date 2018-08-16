var Arrow = require('arrow');
var Model = Arrow.createModel('pin-club', {
    "description": "DB Used for Bison wrestlers that have 15+ pins in a season",
    "connector": "appc.arrowdb",
    "fields": {
        "pinYear": {
            "type": "number",
            "required": true
        },
        "pins": {
            "type": "number",
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
            "type": "number"
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