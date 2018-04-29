'use strict';

angular.module('adp.healthcare',[]).service('healthcareService', ['$http', 'globalVariables', function($http, globalVariables) {
    return {
        getArticles: function () {
            return $http({
                url: globalVariables.articlesURI,
                method: 'GET'
            });
        },
        getTerms: function () {
            return $http({
                url: globalVariables.termsURI,
                method: 'GET'
            });
        },
        getLanguageOptions: function () {
            return [{
                id: 0,
                lang: 'none',
                name: 'Language'
            }, {
                id: 1,
                lang: 'es',
                name: 'Spanish'
            }, {
                id: 2,
                lang: 'en',
                name: 'English'
            }, {
                id: 3,
                lang: 'both',
                name: 'English and Spanish'
            }];
        },
        getContactOptions: function () {
            return [{
                id: 0,
                code: '',
                name: 'Reason for contact'
            }, {
                id: 1,
                code: 'marketplace',
                name: 'Healthcare Marketplace'
            }, {
                id: 2,
                code: 'support',
                name: 'Technical Support'
            }, {
                id: 3,
                code: 'feedback',
                name: 'Website Feedback'
            }];
        }
    };
}]);
