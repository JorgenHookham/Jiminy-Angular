define([

    'jquery',
    'underscore',
    'backbone',

    'app/js/views/app',

    'app/js/models/reflection',
    'app/js/models/suggestion',
    'app/js/models/virtue',

    'app/js/collections/reflections',
    'app/js/collections/suggestions',
    'app/js/collections/virtues'

], function ($, _, Backbone, JiminyApp, ReflectionModel, SuggestionModel, VirtueModel, ReflectionCollection, SuggestionCollection, VirtueCollection) {

    /*
     * This test scenario describes Jiminy's data and it's integrity.
     */

    // Meet Kyle. Kyle likes to save money.
    // He uses Jiminy to keep track of two virtues.

    var KylesJiminy = {};
    
    KylesJiminy.App = new JiminyApp();

    KylesJiminy.App.virtues.add([
        {
            name: 'Frugality'
        },
        {
            name: 'Courage'
        }
    ]);

    test('Kyle\'s Virtues', function () {
        equal(KylesJiminy.App.virtues.length, 2, 'Kyle has two virtues.');
        ok(KylesJiminy.App.virtues.where({'name': 'Frugality'}).length == 1, 'Kyle is frugal.');
        ok(KylesJiminy.App.virtues.where({'name': 'Courage'}).length == 1, 'Kyle is courageous.');
        ok(KylesJiminy.App.virtues.where({'name': 'Chastity'}).length === 0, 'Kyle is not chast.');
    });


    // One day he has a moral dilemna when purchasing a pair of socks,
    // so create creates a tally for his Frugality virtue.

    KylesJiminy.App.reflections.add({
        'virtue_name': 'Frugality'
    });

    test('Kyle\'s moral dilemna regarding socks', function () {

        var new_reflection = KylesJiminy.App.reflections.at(0),
            moment = new_reflection.get('moment'),
            virtue_name = new_reflection.get('virtue_name');

        equal(KylesJiminy.App.reflections.length, 1, 'Kyle has one reflection.');
        ok(moment, 'Reflection moment created at ' + moment + '.');
        ok(KylesJiminy.App.virtues.where({'name': virtue_name }).length == 1, 'The reflection is associated with a virtue.');
    });


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