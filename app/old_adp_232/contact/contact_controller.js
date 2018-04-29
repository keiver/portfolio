'use strict';

angular.module('adp.contact', ['adp.healthcare']).controller('contactController', ['healthcareService', '$scope', function (healthcareService, $scope) {
    $scope.tab = 'contact';
    $scope.formValidation = 'invalid';
    $scope.contactOptions = healthcareService.getContactOptions();
}]);

//All form validation is done with this directive.
angular.module('adp.contact').directive('validateForm', function() {
    return {
        link : function(scope, el, attrs) {
            scope.$watch(attrs.name+'.$error', function(newVal, oldVal) {
                if (!angular.isUndefined(newVal.required) || !angular.isUndefined(newVal.email)) {
                    if ((!angular.isUndefined(newVal.required) && newVal.required.length > 0) ||
                        (!angular.isUndefined(newVal.email) && newVal.email.length > 0)){
                        scope.formValidation = 'invalid';
                    } else {
                        scope.formValidation = 'valid';
                    }
                } else {
                    scope.formValidation = 'valid';
                }
            }, true);
        }
    }
});

