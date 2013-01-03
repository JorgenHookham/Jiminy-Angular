define([

    'jquery',
    'underscore',
    'backbone'

], function ($, _, Backbone) {
    
    /*
     * The main app view for Jiminy
     */

    var Jiminy = Jiminy || {};

    Jiminy.AppView = Backbone.View.extend({

        el: '.jiminy',

        events: {},

        initialize: function (settings) {
            console.log('Jiminy app initialized.');
        },

        render: function () {
            return this;
        }

    });

    return Jiminy;

});