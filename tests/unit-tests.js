define([

    'jquery',
    'underscore',
    'backbone',

    'app/js/models/reflection',
    'app/js/models/suggestion',
    'app/js/models/virtue',

    'app/js/collections/reflections',
    'app/js/collections/suggestions',
    'app/js/collections/virtues'

], function ($, _, Backbone, ReflectionModel, SuggestionModel, VirtueModel, ReflectionCollection, SuggestionCollection, VirtueCollection) {

    /*
     * These tests describe the integrity of Jiminy's data.
     */

    // Tests for Jiminy's data models

    test('Reflection Model', function () {
        var reflection = new ReflectionModel();
        ok(reflection);
    });

    test('Suggestion Model', function () {
        var suggestion = new SuggestionModel();
        ok(suggestion);
    });

    test('Virtue Model', function () {
        var virtue = new VirtueModel();
        ok(virtue);
    });

    // Tests for Jiminy's data collections

    test('Reflection Collection', function () {
        var reflections = new ReflectionCollection();
        ok(reflections);
    });

    test('Suggestion Collection', function () {
        var suggestions = new SuggestionCollection();
        ok(suggestions);
    });

    test('Virtue Collection', function () {
        var virtues = new VirtueCollection();
        ok(virtues);
    });

});