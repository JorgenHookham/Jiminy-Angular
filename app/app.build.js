({
    appDir: './',
    baseUrl: 'js/',
    dir: '../app-built',
    // optimize: 'none',

    paths: {
        'jquery'    : '../lib/jquery-min',
        'backbone'  : '../lib/backbone-min',
        'underscore': '../lib/underscore-min'
    },

    modules: [
        {
            name: 'main'
        }
    ]
})
