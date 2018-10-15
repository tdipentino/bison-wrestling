var Arrow = require('arrow');
var async = require('async');

var WOFRoute = Arrow.Router.extend({
   name: 'wof',
   path: '/wof',
   method: 'GET',
   action: function(req, resp, next) {

      async.parallel({

         bisonState: function(callback) {
            req.server.getAPI('api/bison-state/query', 'GET').execute({
               order: "-stateYear,weight",
               per_page: "100"
            }, callback);
         },
         bisonQualifiers: function(callback) {
            req.server.getAPI('api/bison-qualifiers/query', 'GET').execute({
               order: "-qualYear,weight",
               per_page: "100"
            }, callback);
         },
         bisonRegionals: function(callback) {
            req.server.getAPI('api/bison-regionals/query', 'GET').execute({
               order: "-regionalYear,weight",
               per_page: "100"
            }, callback);
         },
         bisonLeague: function(callback) {
            req.server.getAPI('api/bison-league/query', 'GET').execute({
               order: "-leagueYear,weight",
               per_page: "100"
            }, callback);
         },
         centuryClub: function(callback) {
            req.server.getAPI('api/century-club/query', 'GET').execute({
               order: "-wins",
               per_page: "100"
            }, callback);
         },
         takedownClub: function(callback) {
            req.server.getAPI('api/takedown-club/query', 'GET').execute({
               order: "-takedowns",
               per_page: "100"
            }, callback);
         },
         pinClub: function(callback) {
            req.server.getAPI('api/pin-club/query', 'GET').execute({
               order: "-pins,pinYear",
               per_page: "100"
            }, callback);
         }

      }, function(err, results) {
         if (err) {
            next(err);
         } else {
            var data = {
               meta: {
                  title: 'Vista PEAK Bison Wall of Fame',
                  description: 'Vista PEAK Bison Wall of Fame',
                  author: 'Tony DiPentino'
               },
               components: results
            };
            resp.render('wof', data);
         }
      });
   }
});

module.exports = WOFRoute;