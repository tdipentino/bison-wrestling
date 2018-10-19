var Arrow = require('arrow');
var Model = Arrow.createModel('registered-wrestlers', {
    "description": "DB Used for Registering Wrestlers",
    "connector": "appc.arrowdb",
    "fields": {
        "fname": {
            "type": "string",
            "description": "First name of wrestler",
            "required": true
        },
        "lname": {
            "type": "string",
            "description": "Last name of wrestler",
            "required": true
        },
        "age": {
            "type": "number",
            "description": "Age of wrestler",
            "required": true
        },
        "grade": {
            "type": "number",
            "description": "Grade of wrestler",
            "required": true
        },
        "birthday": {
            "type": "string",
            "description": "Birthdate of wrestler",
            "required": true
        },
        "weight": {
            "type": "number",
            "description": "Current weight of wrestler",
            "required": true
        },
        "shirt-size": {
            "type": "string",
            "description": "Shirt size of wrestler",
            "required": true
        },
        "usa-member-id": {
            "type": "string",
            "description": "USA wrestling registration number",
            "required": true
        },
        "birth-certificate": {
            "type": "string",
            "description": "Link to wrestlers birth certificate"
        },
        "usa-member-upload": {
            "type": "string",
            "description": "Link to USA wrestling card"
        },
        "singlet": {
            "type": "string",
            "description": "Wrestler need a singlet",
            "required": true
        },
        "singlet-size": {
            "type": "string",
            "description": "Size of the singlet"
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