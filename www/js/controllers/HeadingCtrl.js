// public/js/controllers/HeadingCtrl.js
angular.module('HeadingCtrl', []).controller('HeadingController', function($scope, $location, LetterService) {

    $scope.heading = {};

    $scope.save = function () {

        $scope.error =  false;
        $scope.disabled = true;
        
        LetterService.createLetter($scope.heading.firstname, $scope.heading.lastname)
        .then(function(){
            $location.path( '/address' );
            $scope.disabled = false;
            $scope.heading = {};
        })
        .catch(function () {
          console.log("Something went wrong")
          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.heading = {};
        });

    };

})

.controller('AddressController', function($scope, $location,  LetterService) {

    $scope.address={};

    $scope.save = function () {

    	LetterService.updateLetter($scope.address)
        .then(function(){
            $location.path( '/contact' );
            $scope.disabled = false;
            $scope.address = {};
        })
        .catch(function () {
          console.log("Something went wrong")
          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.heading = {};
        });

    }

})

.controller('ContactController', function($scope, $location, AuthService, LetterService) {

    $scope.contact = {};
    
    $scope.register = function() {

    	$scope.error =  false;
    	$scope.disabled = true;
      

      LetterService.updateLetter($scope.contact)
      .then(function(){
            $scope.contact = {};
        })
        .catch(function () {
          console.log("Something went wrong")
          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.contact = {};
        });


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