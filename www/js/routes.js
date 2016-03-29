// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // heading
        .when('/heading', {
            templateUrl: 'views/heading.html',
            controller: 'HeadingController'
        })
        .when('/address', {
            templateUrl: 'views/address.html',
            controller: 'HeadingController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'HeadingController'
        });


    $locationProvider.html5Mode(true);

}]);