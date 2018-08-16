var Arrow = require('arrow');

var activeBisonRoute = Arrow.Router.extend({
    name: 'our_bison',
    path: '/our_bison',
    method: 'GET',
    action: function(req, resp, next) {

        req.server.getAPI('api/bison/query', 'GET').execute({
            where: {
                "is_active": 1
            },
            order: "weight,weight_rank",
            per_page: "100",
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
                resp.render('our_bison', data);
            }
        });


    }
});

module.exports = activeBisonRoute;
