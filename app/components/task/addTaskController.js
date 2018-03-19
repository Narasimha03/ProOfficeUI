
angular.module('office_erp')
    .controller("addTaskController", ['$http', '$scope', 'addTaskServices', 'ngDialog', function ($http, $scope, addTaskServices, ngDialog) {
        $scope.isDisabled = false;

        $scope.disableButton = function () {
            $scope.isDisabled = true;
        }
       


        $scope.data = [];
        $scope.getTask = function () {
            addTaskServices.getTask()
                .success(function (data, status) {
                    $scope.data = data.taskplanner;
                    console.log(JSON.stringify(data));
                   
                })
                .error(function (data, success) {
                });
        }

        $scope.addTask = function (data) {
             $scope.TaskDetails = false;
            var TaskDetails = {
                task: $scope.data.task,
                description: $scope.data.description,
                start_date: $scope.data.start_date,
                end_date:$scope.data.end_date
            }
            addTaskServices.setTask(TaskDetails)
                .success(function (data, status) {
                    ngDialog.open({
                        template: '<p>Project is Added Successfully.</p>',
                        plain: true
                    });
                    $scope.data = [];
                    $scope.getTask();

                })
                .error(function (data, success) {
                    ngDialog.open({
                        template: '<p>Some Error Occured!</p>',
                        plain: true
                    });
                })

        }

        //    $scope.EditProject = function(editdata){
        //      var ProjectDetails = {
        //         project_title:$scope.data.project_title,
        //         client_name:$scope.data.client_name,
        //         due_date:$scope.data.due_date
        //      }
        //     addProjectServices.EditProject(bookDetails)   
        //     .success(function(data, status){
        //         ngDialog.open({
        //         template: '<p>station is Edited Successfully.</p>',
        //         plain: true
        //         });
        //         $scope.editdata = [];
        //         $scope.getStation();
        //     })
        //     .error(function(data,success){
        //         ngDialog.open({
        //         template: '<p>Some Error Occured!</p>',
        //         plain: true
        //         });
        //     })

        // }

        $scope.getTask();
    }])

