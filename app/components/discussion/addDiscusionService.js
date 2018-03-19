angular.module('office_erp')
.factory('addDiscusionServices',['$http','globalServices', function($http,globalServices){
    var addDiscusionServices = {};
   // var baseURL='http://192.168.1.9:4005';

    addDiscusionServices.getDiscussion = function(){
        return $http({
                    method: 'GET',
                    url:globalServices.globalValue.baseURL + '/api/discussion'
                })
    };

     addDiscusionServices.setDiscussion = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url:globalServices.globalValue.baseURL + '/api/discussion',
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

       return addDiscusionServices;
    }]);  