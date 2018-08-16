var Arrow = require('arrow');
var Model = Arrow.createModel('bison-qualifiers', {
    "fields": {
        "qualYear": {
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
    "description": "DB Used for Bison state qualifiers"
});
module.exports = Model;
