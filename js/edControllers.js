var employeeDataApp = angular.module('employeeDataController',[]);

employeeDataApp.service('employeeService', function (){

	this.save=function(newContact){
		if((newContact.firstName && newContact.lastName && newContact.jobrole && newContact.phone && newContact.email) !== null ){
			employeeList.push(newContact);
		}
	};

});

employeeDataApp.controller ('EdController',['$scope', '$http', 'employeeService', function ($scope, $http, employeeService){
    $http.get('js/employeeData.json').success(function(data){
    $scope.employeeList = data;
    $scope.listOrder='firstName';
    });

    $scope.editItem = function (item) {
        item.editable = true;
    }

    $scope.saveItem = function (item) {

        item.editable = false;
        //dong some background ajax calling for persistence...
    };

    $scope.cancelEditing = function(item){

    	item.editable=false;
    };

    /*Commented out for now. facing some DI issues*/
   /* $scope.saveNewContact = function (){

		employeeService.save($scope.newEmp);
		$scope.newEmp={};
	};*/

}]);
