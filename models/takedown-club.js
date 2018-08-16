var Arrow = require('arrow');
var Model = Arrow.createModel('takedown-club', {
    "description": "DB Used for Bison wrestlers that have 50+ takedowns in a season",
    "connector": "appc.arrowdb",
    "fields": {
        "takedownYear": {
            "type": "number",
            "required": true
        },
        "takedowns": {
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