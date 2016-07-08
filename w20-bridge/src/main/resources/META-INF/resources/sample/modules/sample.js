define([
    'module',
    '{angular}/angular',
    '{angular-resource}/angular-resource'
], function (module, angular) {
    var config = module && module.config() || {},
        sampleModule = angular.module('sample', ['ngResource']);

    sampleModule.controller('SampleController', ['$scope', '$resource', function ($scope, $resource) {
        var greeterResource = $resource(config.apiBase + "greeter");

        $scope.name = config.defaultName || '';

        $scope.computeMessage = function () {
            greeterResource.get({
                name: $scope.name
            }, function (data) {
                $scope.message = data.message;
            })
        };
    }]);


    return {
        angularModules: ['sample']
    }
});