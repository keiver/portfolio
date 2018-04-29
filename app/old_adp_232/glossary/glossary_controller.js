'use strict';

angular.module('adp.glossary', ['ngRoute', 'ngSanitize', 'adp.healthcare']).controller('glossaryController',
    ['$scope', 'healthcareService', 'globalVariables', function ($scope, healthcareService, globalVariables) {
        $scope.tab = 'glossary';
        $scope.terms = [];
        $scope.termsPristine = [];
        $scope.languageSelected = 'none';
        $scope.loadError = false;
        $scope.loadingContent = true;
        $scope.languageOptions = healthcareService.getLanguageOptions();
        $scope.rootURL = globalVariables.rootURL;

        $scope.updateTerms = function () {
            healthcareService.getTerms().then(function (response) {
                angular.forEach(response.data.glossary, function(value, key) {
                    value.excerpt = value.excerpt.replace('/assets/', globalVariables.rootURL + '/assets/');
                });
                $scope.loadingContent = false;
                $scope.terms = response.data.glossary;
                $scope.termsPristine = response.data.glossary;
            }, function (data) {
                $scope.loadError = true;
            });
        };
        $scope.updateTerms();

        $scope.search = function () {
            var term = $scope.searchFilter;
            var tmpTerms = [];
            if (term == '' || angular.isUndefined(term)) {
                $scope.terms = $scope.termsPristine;
                return;
            }
            angular.forEach($scope.termsPristine, function (value, k) {
                if (value.title.indexOf(term) > -1 || value.content.indexOf(term) > -1){
                    tmpTerms.push(value);
                }
            });
            $scope.terms = tmpTerms;
        }
    }]);

//Directive to run a function when the Enter key is pressed on the search input.
angular.module('adp.glossary').directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});