var Arrow = require('arrow');

var Route = Arrow.Router.extend({
    name: 'bison_wrestling_club',
    path: '/bison_wrestling_club',
    method: 'GET',
    description: 'Bison Wrestling Club',
    action: function (req, resp) {
        var data = {
            meta: {
                title: 'Vista Peak Bison Wrestling',
                description: 'Vista Peak Bison Wrestling',
                author: 'Tony DiPentino'
            }
        };
        resp.render('bison_wrestling_club', data);
    }
});

module.exports = Route;
