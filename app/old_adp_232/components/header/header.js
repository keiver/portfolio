'use strict';

app.directive('adpheader', [function() {
    return {
        priority: 0,
        restrict: 'EA',
        transclude: true,
        templateUrl: 'components/header/header_partial.html'
    };
}]);