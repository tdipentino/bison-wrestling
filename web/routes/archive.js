var Arrow = require('arrow');

var Route = Arrow.Router.extend({
    name: 'archive',
    path: '/archive',
    method: 'GET',
    description: 'Archived News',
    action: function (req, resp) {
        var data = {
            meta: {
                title: 'Vista Peak Bison Wrestling',
                description: 'Vista Peak Bison Wrestling',
                author: 'Tony DiPentino'
            }
        };
        resp.render('archive', data);
    }
});

module.exports = Route;
