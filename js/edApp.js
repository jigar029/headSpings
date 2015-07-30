var employeeDataApp = angular.module('employeeDataApp', ['ngRoute','employeeDataController']);

employeeDataApp.config(['$routeProvider', function($routeProvider){

$routeProvider.
when('/list', {
    templateUrl: 'partials/employeeList.html',
    controller: 'EdController'
}).
otherwise({
    redirectTo: '/list'
});

}]);