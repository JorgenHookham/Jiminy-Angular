define([

    'jquery',
    'underscore',
    'backbone',
    '../models/virtue'

], function ($, _, Backbone, VirtueModel) {
    
    /*
     * Jiminy keeps track of your all of your virtues.
     * This is where they are stored.
     */

    var VirtueCollection = Backbone.Collection.extend({

        model: VirtueModel

    });

    return VirtueCollection;

});