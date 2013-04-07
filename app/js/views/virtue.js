define([

    'jquery',
    'underscore',
    'backbone',
    'text!../templates/virtue.html'

], function ($, _, Backbone, VirtueTemplate) {
    
    /*
     * This is how Jiminy shows you one of your virtues and lets you
     * track moments that you want to reflect on.
     */

    var VirtueView = Backbone.View.extend({

        'events': {
            'click [data-increment]' : 'ui--create-tally'
        },

        'className': 'tally--virtue',

        'initialize': function (settings) {
            if (settings && settings.model) {
                this.model = settings.model;
            }
        },

        'render': function () {
            _.template(VirtueTemplate, {virtue: this.model});
            return this;
        },

        'ui--create-tally': function (e) {
            e.preventDefault();
            Backbone.Mediator.pub('reflection:create-tally', this.model);
        }

    });

    return VirtueView;

});