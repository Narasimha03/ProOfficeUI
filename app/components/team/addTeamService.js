angular.module('office_erp')
.factory('addTeamServices',['$http','globalServices', function($http,globalServices){
    var addTeamServices = {};
   // var baseURL='http://192.168.1.3:9101';

    addTeamServices.getTeam = function(){
        return $http({
                    method: 'GET',
                    url:globalServices.globalValue.baseURL + '/api/team'
                })
    };

     addTeamServices.setTeam = function(dataValue){
         console.log(dataValue);
        return $http({
                    method: 'POST',
                    url:globalServices.globalValue.baseURL + '/api/team',
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

       return addTeamServices;
    }]);  