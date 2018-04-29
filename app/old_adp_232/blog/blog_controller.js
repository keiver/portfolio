'use strict';

angular.module('adp.blog', ['ngRoute', 'ngSanitize', 'adp.healthcare']).controller('blogController',
    ['$scope', '$route', 'healthcareService', 'globalVariables', function ($scope, $route, healthcareService, globalVariables) {
        $scope.tab = 'blog';
        $scope.articles = [];
        $scope.languageSelected = 'none';
        $scope.loadError = false;
        $scope.loadingContent = true;
        $scope.languageOptions = healthcareService.getLanguageOptions();
        $scope.rootURL = globalVariables.rootURL;
        
        $scope.updateArticles = function () {
            healthcareService.getArticles().then(function (response) {
                angular.forEach(response.data.blog, function(value, key) {
                    value.excerpt = value.excerpt.replace('/assets/', globalVariables.rootURL + '/assets/');
                });
                $scope.loadingContent = false;
                $scope.articles = response.data.blog;
            }, function (response) {
                $scope.loadError = true;
            });
        };
       $scope.updateArticles();
    }]);