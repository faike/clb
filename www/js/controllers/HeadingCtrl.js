// public/js/controllers/HeadingCtrl.js
angular.module('HeadingCtrl', []).controller('HeadingController', function($scope) {

    $scope.tagline = 'Heading!';

    $scope.button = function() {
    	console.log("BOOP"); 
    }

});