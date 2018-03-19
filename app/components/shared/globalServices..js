angular.module('office_erp')
    .factory('globalServices', ['$http', '$rootScope', function ($http, $rootScope) {
        var globalServices = {};
        globalServices.globalValue = {
            //baseURL: 'http://192.168.1.10:9101',
            baseURL: 'http://localhost:9101'

            // role:'admin'
        };

        // globalServices.fetchRoleAuth = function (roles) {
        //     var i = 0;
        //     var retVal;
        //     while (i <= roles.length) {
        //         if (roles[i] == $rootScope.role) {
        //             retVal = true;
        //             break;
        //         } else {
        //             retVal = false;
        //         }
        //         i++;
        //     }
        //     return retVal;
        // }
        globalServices.getProject = function () {
            return $http({
                method: 'GET',
                url: globalServices.globalValue.baseURL + '/api/project'
            })
        };
        globalServices.getTeam = function () {
            return $http({
                method: 'GET',
                url: globalServices.globalValue.baseURL + '/api/team'
            })
        };

         globalServices.getTask = function(){
        return $http({
                    method: 'GET',
                    url:globalServices.globalValue.baseURL  + '/api/taskplanner'
                })
    };

        return globalServices;
    }]);