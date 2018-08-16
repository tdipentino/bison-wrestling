var Arrow = require('arrow');

var Route = Arrow.Router.extend({
    name: 'media',
    path: '/media',
    method: 'GET',
    description: 'Media',
    action: function (req, resp) {
        var data = {
            meta: {
                title: 'Vista Peak Bison Wrestling Media',
                description: 'Vista Peak Bison Wrestling photos and videos',
                author: 'Tony DiPentino'
            }
        };
        resp.render('media', data);
    }
});

module.exports = Route;
