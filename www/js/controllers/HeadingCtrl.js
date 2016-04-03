// public/js/controllers/HeadingCtrl.js
angular.module('HeadingCtrl', []).controller('HeadingController', function($scope, $location) {

    $scope.tagline = 'Heading!';


    $scope.save = function () {
    	$location.path( '/address' );
    }

})

.controller('AddressController', function($scope, $location) {



    $scope.save = function () {
    	$location.path( '/contact' );
    }

})

.controller('ContactController', function($scope, $location, AuthService) {


    $scope.register = function() {

    	$scope.error =  false;
    	$scope.disabled = true;


    	AuthService.register($scope.registerForm.username, $scope.registerForm.password)

    	.then(function() {
    		$location.path('/login');
    		$scope.disabled = false;
    		$scope.registerForm = {};
    	})
    	.catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.registerForm = {};
        });
    };


});