
angular.module('office_erp')
    .controller("addClientController", ['$http', '$scope', 'addClientServices', 'ngDialog', function ($http, $scope, addClientServices, ngDialog) {
        $scope.isDisabled = false;

        $scope.disableButton = function () {
            $scope.isDisabled = true;
        }


        $scope.data = [];
        $scope.getClient = function () {
            addClientServices.getClient()
                .success(function (data, status) {
                    $scope.data = data.clients;
                    console.log(JSON.stringify(data));
                    console.log(JSON.stringify(data.clients[0].client_name));
                })
                .error(function (data, success) {
                });
        }

        $scope.addClient = function (data) {
            var ClientDetails = {
                client_name: $scope.data.client_name,
                phone: $scope.data.phone,
                email: $scope.data.email,
                location:$scope.data.location
            }
            addClientServices.setClient(ClientDetails)
                .success(function (data, status) {
                    ngDialog.open({
                        template: '<p>Project is Added Successfully.</p>',
                        plain: true
                    });
                    $scope.data = [];
                    $scope.getClient();

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

        $scope.getClient();
    }])

