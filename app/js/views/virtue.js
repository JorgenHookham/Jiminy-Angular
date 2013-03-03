define([

    'jquery',
    'underscore',
    'backbone',
    'text!../templates/virtue.html'

], function ($, _, Backbone, VirtueTemplate) {
    
    /*
     * This is how Jiminy shows you one of your virtues.
     */

    var VirtueView = Backbone.View.extend({

        events: {
            'click [data-increment]' : 'add_relection_tally'
        },

        className: 'tally--virtue',

        initialize: function (settings) {
            if (settings && settings.model) {
                this.model = settings.model;
            }
        },

        render: function () {
            _.template(VirtueTemplate, {virtue: this.model});
            return this;
        },

        add_relection_tally: function (e) {
            e.preventDefault();
            Backbone.Mediator.pub('reflection:create-tally', this.model);
        }

    });

    return VirtueView;

});