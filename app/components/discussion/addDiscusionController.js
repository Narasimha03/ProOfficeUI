
angular.module('office_erp')
    .controller("addDiscusionController", ['$http', '$scope', 'addDiscusionServices', 'ngDialog', function ($http, $scope, addDiscusionServices, ngDialog) {
        $scope.isDisabled = false;

        $scope.disableButton = function () {
            $scope.isDisabled = true;
        }
       


        $scope.data = [];
        $scope.getDiscussion = function () {
            addDiscusionServices.getDiscussion()
                .success(function (data, status) {
                    $scope.data = data.discussion;
                    console.log(JSON.stringify(data));
                   
                })
                .error(function (data, success) {
                });
        }

        $scope.addDiscussion = function (data) {
             $scope.DiscussionDetails = false;
            var DiscussionDetails = {
                subject: $scope.data.subject,
                topic: $scope.data.topic
               
            }
            addDiscusionServices.setDiscussion(DiscussionDetails)
                .success(function (data, status) {
                    ngDialog.open({
                        template: '<p>Project is Added Successfully.</p>',
                        plain: true
                    });
                    $scope.data = [];
                    $scope.getDiscussion();

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

        $scope.getDiscussion();
    }])

