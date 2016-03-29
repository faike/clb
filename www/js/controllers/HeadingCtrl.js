// public/js/controllers/HeadingCtrl.js
angular.module('HeadingCtrl', []).controller('HeadingController', function($scope, $location) {

    $scope.tagline = 'Heading!';


    $scope.gotoContact = function () {
    	$location.path( '/contact' );
    }

});