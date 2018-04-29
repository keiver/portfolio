'use strict';

app.service('globalVariables', [function() {
    return {
        rootURL : 'https://www.healthcare.gov',
        articlesURI : 'https://www.healthcare.gov/api/blog.json',
        termsURI : 'https://www.healthcare.gov/api/glossary.json'
    }
}]);
