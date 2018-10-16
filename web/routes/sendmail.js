var Arrow = require('arrow');

var sendEmail = Arrow.Router.extend({
   name: 'sendmail',
   path: '/sendmail',
   method: 'GET',
   action: function(req, resp, next) {

      var nodemailer = require('nodemailer');
      var hbs = require('nodemailer-express-handlebars');
      var options = {
         viewEngine: {
            extname: '.hbs',
            layoutsDir: 'web/views/email/',
            defaultLayout: 'template',
            partialsDir: 'web/views/partials/'
         },
         viewPath: 'web/views/email/',
         extName: '.hbs'
      };

      var name = req.query.name;
      var email = req.query.email;
      var phone = req.query.phone;
      var message = req.query.message;

      var mailOptions = {
         from: '"Bison Wrestling" <vistapeak.wrestling@gmail.com>',
         to: 'tdipentino@gmail.com',
         subject: 'Hello ✔',
         template: 'email_body',
         context: {
            variable1: name,
            variable2: email,
            variable3: phone,
            variable4: message
         }
      };

      var mailer = nodemailer.createTransport('smtps://vistapeak.wrestling@gmail.com:bison2017@smtp.gmail.com');

      mailer.use('compile', hbs(options));

      mailer.sendMail(mailOptions, function(error, info) {
         if (error) {
            return console.log(error);
         }
         resp.redirect('/contact');
      });

   }
});

module.exports = sendEmail;