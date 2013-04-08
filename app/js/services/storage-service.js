jiminyApp.factory('storage_service', function () {
    
    // Configure the localstore DB:
    persistence.store.websql.config(persistence, 'jiminy-app', 'Your personal virtue and reflection records.', 5*1024*1024); // 5Mb
    
    var Reflection = persistence.define('Reflection', {
        virtue: 'TEXT',
        moment: 'DATE'
    });

    var Virtue = persistence.define('Virtue', {
        label: 'TEXT'
    });
    
    persistence.schemaSync();

    data_models = {
        'reflection': Reflection,
        'virtue': Virtue
    };

    var storage_service = {

        add: function (model, data) {
            if (model == 'reflection') {
                persistence.add(new Reflection({ moment: data.moment, virtue: data.virtue.label }));
            } else if (model == 'virtue') {
                persistence.add(new Virtue(data));
            }
            persistence.flush();
        },
        
        remove: function (model, data) {
            if (model == 'reflection') {
                data_models[model].all().filter('moment', '=', data.moment).destroyAll();
            } else if (model == 'virtue') {
                data_models[model].all().filter('label', '=', data.label).destroyAll();
            }
        },
        
        fetchAll: function (model, collection, controller) {
            data_models[model].all().list(function (items) {
                angular.forEach(items, function (item) {
                    collection.push(item._data);
                    controller.$digest();
                });
            });
        }
    };

    return storage_service;

});