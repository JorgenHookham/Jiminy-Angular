define([

    'jquery',
    'underscore',
    'backbone',

    '../collections/reflections',
    '../collections/suggestions',
    '../collections/virtues'

], function ($, _, Backbone, ReflectionCollection, SuggestionCollection, VirtueCollection) {

    /*
     * The main app view for Jiminy
     */

    var JiminyAppView = Backbone.View.extend({

        el: '.jiminy',

        events: {},

        initialize: function (settings) {
            this.reflections = new ReflectionCollection();
            this.suggestions = new SuggestionCollection();
            this.virtues = new VirtueCollection();
        },

        render: function () {
            return this;
        }

    });

    return JiminyAppView;

});