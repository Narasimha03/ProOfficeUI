
angular.module('office_erp')
    .controller("addTeamController", ['$http', '$scope', 'addTeamServices', 'ngDialog', function ($http, $scope, addTeamServices, ngDialog) {
        // $scope.isDisabled = false;

        // $scope.disableButton = function () {
        //     $scope.isDisabled = true;
        // }
       

       // $scope.TeamDetails = false;
        $scope.data = [];
        $scope.getTeam = function () {
         //   $scope.TeamDetails = false;
            addTeamServices.getTeam()
                .success(function (data, status) {
                    $scope.data = data.team;
                    console.log(JSON.stringify(data));
                   
                })
                .error(function (data, success) {
                });
        }

        $scope.addTeam = function (data) {
             //$scope.TeamDetails = true;
            // $scope.table = true;
            var TeamDetails = {
                name: $scope.data.name,
                email: $scope.data.email,
                phone: $scope.data.phone,
                role:$scope.data.role
            }
            addTeamServices.setTeam(TeamDetails)
                .success(function (data, status) {
                    ngDialog.open({
                        template: '<p>Project is Added Successfully.</p>',
                        plain: true
                    });
                    $scope.data = [];
                    $scope.getTeam();

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

        $scope.getTeam();
    }])

