require([

    'jquery',
    'underscore',
    'backbone',
    'views/app'

], function($, _, Backbone, JiminyAppView) {
    
    var Jiminy = Jiminy || {};

    Jiminy.AppView = new JiminyAppView();

});