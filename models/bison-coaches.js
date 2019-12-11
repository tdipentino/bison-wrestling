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
            "type": "string",
            "default": "<p><img class=\"img-responsive\" src=\"img/coming-soon.png\" alt=\"Coming Soon\" style=\"width:100%; height:100%;\"></p>"
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
            "default": "n",
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