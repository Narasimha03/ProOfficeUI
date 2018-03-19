angular.module('office_erp')
    .controller("addArticleController", ['$http', '$scope', '$filter', 'addArcticleServices', 'globalServices', 'ngDialog', function ($http, $scope, $filter, addArcticleServices, globalServices, ngDialog) {
        // $scope.isDisabled = false;

        // $scope.disableButton = function () {
        //     $scope.isDisabled = true;
        // }


        $scope.hideForm = false;
        $scope.commentData = [];
        $scope.articleData = [];
        $scope.getSendArticle = function () {
            addArcticleServices.getSendArticle()
                .success(function (data, status) {
                    $scope.articleData = data.articles;
                    console.log("message");
                    $scope.article_id = $scope.articleData[0].article_id;

                    console.log($scope.article_id);
                    $scope.getSendArticleById($scope.article_id);
                    //console.log(JSON.stringify(data));

                })
                .error(function (data, success) {
                });
        }
        $scope.getSendArticleById = function (article_id) {
            addArcticleServices.getSendArticleById(article_id)
                .success(function (data, status) {
                    console.log("message........2222");
                    console.log(JSON.stringify(data));
                    $scope.articleData = data.articles;
                    $scope.article_id = $scope.articleData[0].article_id;

                  

                })
                .error(function (data, success) {
                });
        }

        $scope.addSendArticle = function (data) {
            $scope.hideForm = true;
            // $scope.IssueDetails = false;
            var articleDetails = {
                article: $scope.data.send_articles,
                date: new Date().toDateString(),
                time: $filter('date')(new Date(), 'HH:mm')



            }
            addArcticleServices.setSendArticle(articleDetails)
                .success(function (data, status) {
                    ngDialog.open({
                        template: '<p>Article is Sended Successfully.</p>',
                        plain: true
                    });
                    $scope.data = [];
                    $scope.getSendArticle();

                })
                .error(function (data, success) {
                    ngDialog.open({
                        template: '<p>Some Error Occured!</p>',
                        plain: true
                    });
                })

        }
        $scope.getSendComment = function () {
            addArcticleServices.getSendComment()
                .success(function (data, status) {
                    $scope.commentData = data.comment;
                    console.log(JSON.stringify(data));

                })
                .error(function (data, success) {
                });
        }

        $scope.addSendComment = function (dataValue) {

            console.log(dataValue);
            var commentDetails = {
                comment: dataValue,
                date: new Date().toDateString(),
                time: $filter('date')(new Date(), 'HH:mm')

            }
            console.log(commentDetails);
            addArcticleServices.setSendComment(commentDetails)
                .success(function (data, status) {
                    ngDialog.open({
                        template: '<p>Comment is Sended Successfully.</p>',
                        plain: true
                    });
                    $scope.data = [];
                    $scope.getSendComment();

                })
                .error(function (data, success) {
                    ngDialog.open({
                        template: '<p>Some Error Occured!</p>',
                        plain: true
                    });
                })

        }
        $scope.getSendArticle();
        $scope.getSendComment();
    }])
