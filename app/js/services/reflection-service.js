jiminyApp.factory('reflection_service', function ($rootScope, storage_service) {
    var reflection_service = {};
    
    reflection_service.message = '';

    reflection_service.prepare_reflection_broadcast = function (virtue, moment) {
        this.virtue = virtue;
        this.moment = moment;
        this.create_reflection_broadcast();
    };

    reflection_service.create_reflection_broadcast = function () {
        storage_service.add('reflection', { virtue: this.virtue, moment: this.moment });
        $rootScope.$broadcast('new_reflection');
    };

    return reflection_service;
});