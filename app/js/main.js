require.config({
    baseUrl: 'js/',
    paths: {
        'jquery'    : '../../lib/jquery-min',
        'backbone'  : '../../lib/backbone-min',
        'underscore': '../../lib/underscore-min'
    }
});

require([

    'jquery',
    'underscore',
    'backbone',
    'views/app'

], function($, _, Backbone, JiminyAppView) {
    
    var Jiminy = Jiminy || {};

    Jiminy.AppView = new JiminyAppView();

});