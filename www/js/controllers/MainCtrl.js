// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope, $location) {

    $scope.tagline = 'To the moon and back!';   

    $scope.getStarted = function () {
    	$location.path( '/heading' );
    }

});