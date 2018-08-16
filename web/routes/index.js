var Arrow = require('arrow');

var Route = Arrow.Router.extend({
    name: 'index',
    path: '/',
    method: 'GET',
    description: 'Home Screen',
    action: function (req, resp) {
        var data = {
            meta: {
                title: 'Vista Peak Bison Wrestling',
                description: 'Vista Peak Bison Wrestling',
                author: 'Tony DiPentino'
            }
        };
        resp.render('index', data);
    }
});

module.exports = Route;
