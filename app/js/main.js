require.config({
    baseUrl: 'js/',
    paths: {
        'jquery'    : '../../lib/jquery-min',
        'backbone'  : '../../lib/backbone-min',
        'underscore': '../../lib/underscore-min',
        'text'      : '../../lib/text',
        'mediator'  : '../../lib/backbone-mediator'
    }
});

require([

    'jquery',
    'underscore',
    'backbone',
    'views/app',
    'mediator'

], function($, _, Backbone, JiminyAppView) {

    var Jiminy = Jiminy || {};

    Jiminy.AppView = new JiminyAppView();

});