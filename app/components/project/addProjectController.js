
angular.module('office_erp')
    .controller("addProjectController", ['$http', '$scope', 'addProjectServices', 'ngDialog', function ($http, $scope, addProjectServices, ngDialog) {
        $scope.isDisabled = false;

        $scope.disableButton = function () {
            $scope.isDisabled = true;
        }
       


        $scope.data = [];
        $scope.getProject = function () {
            addProjectServices.getProject()
                .success(function (data, status) {
                    $scope.data = data.project;
                    console.log(JSON.stringify(data));
                    console.log(JSON.stringify(data.project[0].project_title));
                })
                .error(function (data, success) {
                });
        }

        $scope.addProject = function (data) {
             $scope.ProjectDetails = false;
            var ProjectDetails = {
                project_title: $scope.data.project_title,
                client_name: $scope.data.client_name,
                due_date: $scope.data.due_date
            }
            addProjectServices.setProject(ProjectDetails)
                .success(function (data, status) {
                    ngDialog.open({
                        template: '<p>Project is Added Successfully.</p>',
                        plain: true
                    });
                    $scope.data = [];
                    $scope.getProject();

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

        $scope.getProject();
    }])

