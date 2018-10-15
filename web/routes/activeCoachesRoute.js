var Arrow = require('arrow');

var activeCoachesRoute = Arrow.Router.extend({
    name: 'our_coaches',
    path: '/our_coaches',
    method: 'GET',
    action: function(req, resp, next) {

        req.server.getAPI('api/bison-coaches/query', 'GET').execute({
					where: {
						"is_active":1
					},
					order:"-head_coach",
				}, function(err, results) {
            if (err) {
                next(err);
            } else {
                var data = {
                    meta: {
                        title: 'Vista PEAK 2017 - 2018 Bison Coaches',
                        description: 'Vista PEAK 2017 - 2018 Bison Coaches',
                        author: 'Tony DiPentino'
                    },
										components: results
                };
                resp.render('our_coaches', data);
            }
        });


    }
});

module.exports = activeCoachesRoute;