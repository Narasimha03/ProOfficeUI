angular.module('office_erp')
    .factory('addArcticleServices', ['$http','globalServices', function ($http,globalServices) {
        var addArcticleServices = {};
        addArcticleServices.getSendArticle = function () {
            return $http({
                method: 'GET',
                url: globalServices.globalValue.baseURL + '/api/article'
            })
        };
        addArcticleServices.getSendArticleById = function (article_id) {
            return $http({
                method: 'GET',
                url: globalServices.globalValue.baseURL + '/api/article/'+article_id
            })
        };

        addArcticleServices.setSendArticle = function (dataValue) {
            console.log(dataValue);
            return $http({
                method: 'POST',
                url: globalServices.globalValue.baseURL + '/api/article',
                data: $.param(dataValue),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            })
        };

        addArcticleServices.getSendComment = function () {
            return $http({
                method: 'GET',
                url: globalServices.globalValue.baseURL + '/api/articles/comments'
            })
        };

        addArcticleServices.setSendComment = function (dataValue) {
            console.log(dataValue);
            return $http({
                method: 'POST',
                url: globalServices.globalValue.baseURL + '/api/articles/comments',
                data: $.param(dataValue),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            })
        };
       
        return addArcticleServices;
    }]);  