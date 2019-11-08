var Arrow = require('arrow');

var CaptiansRoute = Arrow.Router.extend({
	name: 'our_captains',
	path: '/our_captains',
	method: 'GET',
	description: 'Our Captains',
	action: function(req, resp) {
		var data = {
			meta: {
				title: 'Vista Peak Bison Wrestling',
				description: 'Vista Peak Bison Wrestling',
				author: 'Tony DiPentino'
			}
		};
		resp.render('our_captains', data);
	}
});

module.exports = CaptiansRoute;