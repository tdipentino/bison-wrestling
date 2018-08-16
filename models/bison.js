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
        "weight_rank": {
            "type": "number",
            "default": "0"
        },
        "is_varsity": {
            "type": "number",
            "default": "0"
        },
        "match_points": {
            "type": "number",
            "default": "0"
        },
        "team_points": {
            "type": "number",
            "default": "0"
        },
        "wins": {
            "type": "number",
            "default": "0"
        },
        "loses": {
            "type": "number",
            "default": "0"
        },
        "fall": {
            "type": "number",
            "default": "0"
        },
        "major_decision": {
            "type": "number",
            "default": "0"
        },
        "decision": {
            "type": "number",
            "default": "0"
        },
        "forfeit": {
            "type": "number",
            "default": "0"
        },
        "tech_fall": {
            "type": "number",
            "default": "0"
        },
        "take_down": {
            "type": "number",
            "default": "0"
        },
        "near_fall_2": {
            "type": "number",
            "default": "0"
        },
        "near_fall_3": {
            "type": "number",
            "default": "0"
        },
        "e1": {
            "type": "number",
            "default": "0"
        },
        "reversal": {
            "type": "number",
            "default": "0"
        },
        "is_jv": {
            "type": "number",
            "default": "0"
        },
        "jv_match_points": {
            "type": "number",
            "default": "0"
        },
        "jv_team_points": {
            "type": "number",
            "default": "0"
        },
        "jv_wins": {
            "type": "number",
            "default": "0"
        },
        "jv_loses": {
            "type": "number",
            "default": "0"
        },
        "jv_fall": {
            "type": "number",
            "default": "0"
        },
        "jv_major_decision": {
            "type": "number",
            "default": "0"
        },
        "jv_decision": {
            "type": "number",
            "default": "0"
        },
        "jv_forfeit": {
            "type": "number",
            "default": "0"
        },
        "jv_tech_fall": {
            "type": "number",
            "default": "0"
        },
        "jv_take_down": {
            "type": "number",
            "default": "0"
        },
        "jv_near_fall_2": {
            "type": "number",
            "default": "0"
        },
        "jv_near_fall_3": {
            "type": "number",
            "default": "0"
        },
        "jv_e1": {
            "type": "number",
            "default": "0"
        },
        "jv_reversal": {
            "type": "number",
            "default": "0"
        },
        "year": {
            "type": "number",
            "default": "2018"
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