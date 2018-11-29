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
            "default": "//lh3.googleusercontent.com/SAx6ywdmNbbGs9vvhDeHrcabgOM5S22QiZuCpYfFHQAVnGQvr7AbwW8mo1otTUxMaFajguMyZ4xgA3w43INvSGIaFfH-J8TJ_bVricR0HRyVoei7ahjSvz3o-gDlydc87F8-2DuElA"
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
            "default": "2019"
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