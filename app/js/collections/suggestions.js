define([

    'jquery',
    'underscore',
    'backbone',
    '../models/suggestion'

], function ($, _, Backbone, SuggestionModel) {
    
    /*
     * Jiminy has a few suggestions for you, to get you started.
     * This is where they come from.
     */

    var SuggestionsCollection = Backbone.Collection.extend({

        model: SuggestionModel

    });

    return SuggestionsCollection;

});