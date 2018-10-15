var Arrow = require('arrow');

var Contact = Arrow.Router.extend({
    name: 'contact',
    path: '/contact',
    method: 'GET',
    description: 'Contact Us',
    action: function (req, resp) {
        var data = {
            meta: {
                title: 'Vista Peak Bison Wrestling',
                description: 'Vista Peak Bison Wrestling',
                author: 'Tony DiPentino'
            }
        };
        resp.render('contact', data);
    }
});

module.exports = Contact;
