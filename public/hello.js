angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $scope.title = 'Hello at '+ new Date();
    $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });
});
