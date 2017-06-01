"use strict";
//
app.controller("bookCtrl", function($scope, $http) {
    $http.get('https://travel-guide-9d5e4.firebaseio.com/.json')
        //$http.get(`/data/guides.json`)
        .then(function(value) {
            console.log(value);
            $scope.books = value.data.guides;

        });
});
