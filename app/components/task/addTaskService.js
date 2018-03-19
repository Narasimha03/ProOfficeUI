angular.module('office_erp')
.factory('addTaskServices',['$http','globalServices', function($http,globalServices){
    var addTaskServices = {};
   // var baseURL='http://192.168.1.9:4005';

    addTaskServices.getTask = function(){
        return $http({
                    method: 'GET',
                    url:globalServices.globalValue.baseURL + '/api/taskplanner'
                })
    };

     addTaskServices.setTask = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url:globalServices.globalValue.baseURL + '/api/taskplanner',
                    data: $.param(dataValue),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
                })
      };

    // addProjectServices.EditProject = function(dataValue){
    //         console.log(dataValue);
    //         return $http({
    //                     method: 'EDIT',
    //                     url: baseURL + '',
    //                     data: $.param(dataValue),
    //                     headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
    //                 })
    //     };

       return addTaskServices;
    }]);  