var Arrow = require('arrow');

var PastBisonRoute = Arrow.Router.extend({
    name: 'past_bison',
    path: '/past_bison',
    method: 'GET',
    action: function(req, resp, next) {

        req.server.getAPI('api/bison/query', 'GET').execute({
            where: {
                "is_active": 0
            },
            order: "weight",
            per_page: "200",
        }, function(err, results) {
            if (err) {
                next(err);
            } else {
                var components = {};
                var data = {
                    meta: {
                        title: 'Vista PEAK - Bison Wrestlers',
                        description: 'Vista PEAK Bison Wrestlers',
                        author: 'Tony DiPentino'
                    },
                    components: results
                };
                resp.render('past_bison', data);
            }
        });


    }
});

module.exports = PastBisonRoute;
