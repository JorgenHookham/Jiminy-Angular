// jslint node:true
'use strict';

jiminyApp.controller('ReflectionListCtrl',
    function ReflectionListCtrl ($scope, reflection_service, storage_service) {
        
        $scope.reflections = [];
        storage_service.fetchAll('reflection', $scope.reflections, $scope);

        $scope.add_reflection = function (virtue) {
            $scope.reflections.push({ label: $scope.virtue_text });
        };

        $scope.remove_reflection = function (reflection) {
            $scope.reflections.pop(reflection);
            storage_service.remove('reflection', reflection);
        };

        $scope.$on('new_reflection', function () {
            $scope.reflections.push({ moment: reflection_service.moment, virtue: reflection_service.virtue.label });
        });

});