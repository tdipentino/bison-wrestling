var Arrow = require('arrow');

var About = Arrow.Router.extend({
	name: 'about',
	path: '/about',
	method: 'GET',
	description: 'About Us',
	action: function(req, resp) {
		var data = {
			meta: {
				title: 'Vista Peak Bison Wrestling',
				description: 'Vista Peak Bison Wrestling',
				author: 'Tony DiPentino'
			}
		};
		resp.render('about', data);
	}
});

module.exports = About;