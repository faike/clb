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
            controller: 'AddressController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'HeadingController'
        })
        .when('/recipient', {
            templateUrl: 'views/recipient.html',
            controller: 'RecipientController'
        })
        .when('/career', {
            templateUrl: 'views/career.html',
            controller: 'CareerController'
        })
        .when('/positions', {
            templateUrl: 'views/positions.html',
            controller: 'PositionsController'
        })
        .when('/preview', {
            templateUrl: 'views/preview.html',
            controller: 'PreviewController'
        });


    $locationProvider.html5Mode(true);

}]);