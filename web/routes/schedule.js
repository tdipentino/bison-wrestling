var Arrow = require('arrow');

var Route = Arrow.Router.extend({
    name: 'schedule',
    path: '/schedule',
    method: 'GET',
    description: 'Schedule',
    action: function (req, resp) {
        var data = {
            meta: {
                title: 'Vista Peak Bison Wrestling',
                description: 'Vista Peak Bison Wrestling',
                author: 'Tony DiPentino'
            }
        };
        resp.render('schedule', data);
    }
});

module.exports = Route;
