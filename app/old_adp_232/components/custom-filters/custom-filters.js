'use strict';

app.filter('formatDate', function myDateFormat($filter){
    return function(text){
        var tempdate = new Date(text.replace(/-/g,"/").slice(0,-6));
        return $filter('date')(tempdate, "MM/dd/yyyy");
    }
});

app.filter('languageFilter', function() {
    return function(items, search) {
        if (!search || search == 'none' || search == 'both') {
            return items;
        }
        return items.filter(function(element, index, array) {
            return (element.lang === search);
        });
    };
});

/* Filter to match terms on ng-repeat. Commented because click is required on Ok button.
app.filter('glossaryFilter', function() {
    return function(items, search) {
        if (!search || search === '') {
            return items;
        }
        return items.filter(function(element, index, array) {
            return (element.title.indexOf(search) > -1 );
        });
    };
});*/
