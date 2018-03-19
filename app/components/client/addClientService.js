angular.module('office_erp')
.factory('addClientServices',['$http','globalServices', function($http,globalServices){
    var addClientServices = {};
   // var baseURL='http://192.168.1.5:4005';

    addClientServices.getClient = function(){
        return $http({
                    method: 'GET',
                    url: globalServices.globalValue.baseURL + '/api/clients'
                })
    };

     addClientServices.setClient = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url: globalServices.globalValue.baseURL + '/api/clients',
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

       return addClientServices;
    }]);  