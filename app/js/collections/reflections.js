define([

    'jquery',
    'underscore',
    'backbone',
    '../models/reflection'

], function ($, _, Backbone, ReflectionModel) {
    
    /*
     * Jiminy remembers each of your reflections for you.
     * This is where they're written down.
     */

    var ReflectionCollection = Backbone.Collection.extend({

        model: ReflectionModel,

        defaults: {
            'moment': new Date()
        }

    });

    return ReflectionCollection;

});