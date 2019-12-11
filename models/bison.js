var Arrow = require('arrow');
var Model = Arrow.createModel('bison', {
    "fields": {
        "firstname": {
            "type": "string"
        },
        "lastname": {
            "type": "string"
        },
        "is_captain": {
            "type": "number",
            "default": "0"
        },
        "is_active": {
            "type": "number",
            "default": "1"
        },
        "grade": {
            "type": "number",
            "default": "9"
        },
        "img_dir": {
            "type": "string",
            "default": "N"
        },
        "weight": {
            "type": "string"
        },
        "team": {
            "type": "string",
            "default": "v"
        },
        "year": {
            "type": "number",
            "default": "2020"
        },
        "program_years": {
            "type": "string",
            "default": "R",
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
    "description": "DB Used for Bison Wrestlers"
});
module.exports = Model;