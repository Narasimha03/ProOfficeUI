angular.module('office_erp')
    .controller("addTodolistController", ['$http', '$scope', '$filter', 'globalServices', 'ngDialog', function ($http, $scope, $filter, globalServices, ngDialog) {
        // $scope.isDisabled = false;

        // $scope.disableButton = function () {
        //     $scope.isDisabled = true;
        // }
        $scope.hideForm = false;
        $scope.data = [];
        $scope.projectData = [];
        $scope.getTask = function () {
            globalServices.getTask()
                .success(function (data, status) {
                    $scope.data = data.taskplanner;
                    console.log(JSON.stringify(data));

                })
                .error(function (data, success) {
                });
        }

        $scope.getProject = function () {
            // $scope.hideForm = false;
            globalServices.getProject()
                .success(function (data, status) {
                    $scope.projectData = data.project;
                    console.log(JSON.stringify(data));
                    console.log(JSON.stringify(data.project[0].project_title));
                })
                .error(function (data, success) {
                });
        }

        $scope.getTask();
        $scope.getProject();

    }])

