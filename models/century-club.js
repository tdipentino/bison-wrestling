var Arrow = require('arrow');
var Model = Arrow.createModel('century-club', {
    "description": "DB Used for Bison wrestlers that have 100+ wins",
    "connector": "appc.arrowdb",
    "fields": {
        "firstname": {
            "type": "string",
            "required": true
        },
        "lastname": {
            "type": "string",
            "required": true
        },
        "wins": {
            "type": "number",
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