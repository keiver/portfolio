'use strict';

app.directive('htmlResources', ['$timeout', 'globalVariables', function ($timeout, globalVariables) {
    return {
        link: {
            pre: function postLink(scope, element) {
                $timeout(function () {
                    var images = element.find('img');
                    var links = element.find('a');
                    angular.forEach(images, function (value, k) {
                        if (!angular.isUndefined(value)) {
                            angular.element(value).addClass('img-responsive center-block');
                        }
                    });
                    angular.forEach(links, function (value, k) {
                        if (!angular.isUndefined(value)) {
                            var newLink = angular.element(value).prop('href').replace(window.location.origin, '');
                            angular.element(value).prop('target', '_blank');
                            angular.element(value).prop('href', globalVariables.rootURL + newLink);
                        }
                    })
                });
            }
        }
    };
}]);
