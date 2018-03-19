angular.module('office_erp')
.factory('addProjectServices',['$http','globalServices', function($http,globalServices){
    var addProjectServices = {};
   // var baseURL='http://192.168.1.5:4005';

    addProjectServices.getProject = function(){
        return $http({
                    method: 'GET',
                    url:globalServices.globalValue.baseURL + '/api/project'
                })
    };

     addProjectServices.setProject = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url:globalServices.globalValue.baseURL + '/api/project',
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

       return addProjectServices;
    }]);  