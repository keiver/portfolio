'use strict';

var app = angular.module('adp', [
    'ngRoute',
    'ngAnimate',
    'adp.blog',
    'adp.glossary',
    'adp.contact',
    'adp.healthcare'
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "blog/blog_partial.html",
        controller: "blogController"
    }).when("/glossary", {
        templateUrl: "glossary/glossary_partial.html",
        controller: "glossaryController"
    }).when("/contact", {
        templateUrl: "contact/contact_partial.html",
        controller: "contactController"
    }).otherwise({redirectTo: "/"});
}]);