
angular.module('office_erp')
    .controller("addIssueController", ['$http', '$scope', '$filter', 'globalServices', 'addProjectServices', 'addTaskServices', 'addIssueServices', 'ngDialog', function ($http, $scope, $filter, globalServices, addProjectServices, addTaskServices, addIssueServices, ngDialog) {
        $scope.isDisabled = false;

        $scope.disableButton = function () {
            $scope.isDisabled = true;
        }
        $scope.issueDetails = true;


        // $scope.getProject = function () {
        globalServices.getProject()
            .success(function (data, status) {
                $scope.projectData = data.project;
                console.log(JSON.stringify(data));
                console.log(JSON.stringify(data.project[0].project_title));
                $scope.project_id = $scope.projectData[0].project_id;
                console.log($scope.project_id);
                $scope.getIssueByProject($scope.project_id);
            })
            .error(function (data, success) {
            });
        // }

        addTaskServices.getTask()
            .success(function (data, status) {
                $scope.taskData = data.taskplanner;
                console.log(JSON.stringify(data));

            })
            .error(function (data, success) {
            });


        $scope.data = [];
        $scope.getIssue = function () {
            addIssueServices.getIssue()
                .success(function (data, status) {
                    $scope.issueData = data.issue;
                    console.log(JSON.stringify(data));

                })
                .error(function (data, success) {
                });
        }

        $scope.getIssueByProject = function (project_id) {
            console.log("issue by project")

            // $scope.editdata = angular.copy($scope.projectData[value]);
            // $scope.project_id = $scope.editdata.project_id;
            addIssueServices.getIssueByProject(project_id)
                .success(function (data, status) {
                    $scope.projectIssue = data.issue_by_projects;
                    console.log(JSON.stringify(data));
                    $scope.issue_id = $scope.projectIssue[0].issue_id;
                    $scope.getIssueById($scope.issue_id);
                })
                .error(function (data, success) {
                });
        }

        $scope.getIssueById = function (issue_id) {
            console.log("issue by project")

            // $scope.editdata = angular.copy($scope.projectIssue[value]);
            // $scope.issue_id = $scope.editdata.issue_id;
            addIssueServices.getIssueById(issue_id)
                .success(function (data, status) {
                    console.log(JSON.stringify(data));

                    $scope.IssueId = data.issue_by_id;

                    $scope.issue = $scope.IssueId[0].problem;
                    $scope.issue_id = $scope.IssueId[0].issue_id;
                    $scope.getMsg($scope.issue_id);
                    console.log($scope.issue_id);
                })
                .error(function (data, success) {
                });
        }

        $scope.addIssue = function (data) {
            $scope.IssueDetails = false;
            var IssueDetails = {
                subject: $scope.data.title,
                problem: $scope.data.problem,
                project: $scope.data.project,
                task: $scope.data.task
            }
            addIssueServices.setIssue(IssueDetails)
                .success(function (data, status) {
                    ngDialog.open({
                        template: '<p>Issue is Added Successfully.</p>',
                        plain: true
                    });
                    $scope.data = [];
                    $scope.getIssueByProject($scope.project_id);

                })
                .error(function (data, success) {
                    ngDialog.open({
                        template: '<p>Some Error Occured!</p>',
                        plain: true
                    });
                })

        }

        $scope.sendMsg = function (data) {

            var msgDetails = {
                send_issues: $scope.data.message,
                date: new Date().toDateString(),
                time: $filter('date')(new Date(), 'HH:mm')

            }
            console.log(msgDetails)
            console.log($scope.issue_id);
            addIssueServices.sendMsg(msgDetails, $scope.issue_id)
                .success(function (data, status) {
                    ngDialog.open({
                        template: '<p>Message Sended Successfully.</p>',
                        plain: true
                    });
                    $scope.data = [];
                    $scope.getMsg($scope.issue_id);
                    // $scope.getIssue($scope.issue_id);

                })
                .error(function (data, success) {
                    ngDialog.open({
                        template: '<p>Some Error Occured!</p>',
                        plain: true
                    });
                })

        }
        $scope.getMsg = function (value) {
            console.log("issue by project")


            addIssueServices.getMsg($scope.issue_id)
                .success(function (data, status) {
                    console.log(JSON.stringify(data));

                    $scope.IssueMsg = data.issue_msg;

                    // $scope.issue=$scope.IssueId[0].problem;
                    // $scope.issue_id=$scope.issue_id[0].issue_id;

                })
                .error(function (data, success) {
                });
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

        $scope.getIssue();
    }])

