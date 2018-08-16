var Arrow = require('arrow'),
	server = new Arrow();

var helpers = require('handlebars-helpers')();

// lifecycle examples
server.on('starting', function () {
	server.logger.debug('server is starting!');
});

server.on('started', function () {
	server.logger.debug('server started!');
});

server.getMiddleware().getRendererEngine('hbs').registerPartials('web/views/partials');
server.getMiddleware().getRendererEngine('hbs').registerHelper(helpers);

// start the server
server.start();
