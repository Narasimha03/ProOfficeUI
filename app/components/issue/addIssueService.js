angular.module('office_erp')
    .factory('addIssueServices', ['$http', 'globalServices', function ($http, globalServices) {
        var addIssueServices = {};
        //var baseURL='http://192.168.1.9:4005';

        addIssueServices.getIssue = function () {
            return $http({
                method: 'GET',
                url: globalServices.globalValue.baseURL + '/api/issue'
            })
        };

        addIssueServices.getIssueByProject = function (project_id) {
            console.log(project_id);
            return $http({
                method: 'GET',
                url: globalServices.globalValue.baseURL + '/api/issue_by_project/' +project_id
            })
        };
        addIssueServices.getIssueById = function (issue_id) {
            console.log(issue_id);
            return $http({
                method: 'GET',
                url: globalServices.globalValue.baseURL + '/api/issue_by_id/' +issue_id
            })
        };

        addIssueServices.setIssue = function (dataValue) {
            console.log(dataValue);
            return $http({
                method: 'POST',
                url: globalServices.globalValue.baseURL + '/api/issue',
                data: $.param(dataValue),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            })
        };

        addIssueServices.sendMsg = function (dataValue,issue_id) {
            console.log(dataValue);
            return $http({
                method: 'POST',
                url: globalServices.globalValue.baseURL + '/api/issue/send_issue/'+issue_id,
                data: $.param(dataValue),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            })
        };
        addIssueServices.getMsg = function (issue_id) {
            console.log(issue_id);
            return $http({
                method: 'GET',
                url: globalServices.globalValue.baseURL + '/api/issue/send_issue/'+issue_id,
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

        return addIssueServices;
    }]);  