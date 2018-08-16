var Arrow = require('arrow');
var Model = Arrow.createModel('bison-coaches', {
    "fields": {
        "firstname": {
            "type": "string",
            "required": true
        },
        "lastname": {
            "type": "string",
            "required": true
        },
        "title": {
            "type": "string"
        },
        "bio": {
            "type": "string"
        },
        "is_active": {
            "type": "number",
            "default": "1",
            "required": true
        },
        "head_coach": {
            "type": "number",
            "default": "1",
            "required": true
        },
        "img_dir": {
            "type": "string",
            "default": "//lh3.googleusercontent.com/SAx6ywdmNbbGs9vvhDeHrcabgOM5S22QiZuCpYfFHQAVnGQvr7AbwW8mo1otTUxMaFajguMyZ4xgA3w43INvSGIaFfH-J8TJ_bVricR0HRyVoei7ahjSvz3o-gDlydc87F8-2DuElA",
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
    "singular": "bison-coach",
    "description": "DB Used for Bison Coaches"
});
module.exports = Model;