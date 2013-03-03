define([

    'jquery',
    'underscore',
    'backbone'

], function ($, _, Backbone) {

    /*
     * This is how Jiminy remembers one of your reflections.
     */

    var ReflectionModel = Backbone.Model.extend({

        defaults: {
            'moment': new Date()
        }

    });

    return ReflectionModel;

});