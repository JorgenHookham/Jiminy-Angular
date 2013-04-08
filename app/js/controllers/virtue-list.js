// jslint node:true
'use strict';

jiminyApp.controller('VirtueListCtrl',
    function VirtueListCtrl ($scope, reflection_service, storage_service) {
        
        $scope.virtues = [];
        storage_service.fetchAll('virtue', $scope.virtues, $scope);

        $scope.state = '';

        $scope.add_virtue = function () {
            $scope.virtues.push({ label: $scope.virtue_text });
            storage_service.add('virtue', { label: $scope.virtue_text });
            $scope.virtue_text = '';
        };

        $scope.remove_virtue = function (virtue) {
            $scope.virtues.pop(virtue);
            storage_service.remove('virtue', virtue);
        };

        $scope.create_reflection = function (virtue) {
            reflection_service.prepare_reflection_broadcast(virtue, new Date());
        };

        $scope.edit_virtues = function () {
            $scope.state = 's-edit-virtues';
        };

        $scope.save_virtues = function () {
            $scope.state = '';
        };
});