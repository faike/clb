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
    		$location.path('/recipient');
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


}).controller('RecipientController', function($scope, $location,  LetterService) {

    $scope.recipient={};

    $scope.save = function () {

      LetterService.updateLetter($scope.recipient)
        .then(function() {
            $location.path( '/career' );
            $scope.disabled = false;
            $scope.recipient = {};
        })
        .catch(function () {
          console.log("Something went wrong")
          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.recipient = {};
        });

    }

})
.controller('CareerController', function($scope, $location,  LetterService) {

    $scope.career={};

    $scope.save = function () {

      LetterService.updateLetter($scope.career)
        .then(function() {
            $location.path( '/positions' );
            $scope.disabled = false;
            $scope.career = {};
        })
        .catch(function () {
          console.log("Something went wrong")
          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.career = {};
        });

    }

})
.controller('PositionsController', function($scope, $location,  LetterService) {

    $scope.positions={};

    $scope.save = function () {

      LetterService.updateLetter($scope.positions)
        .then(function() {
            $location.path( '/preview' );
            $scope.disabled = false;
            $scope.career = {};
        })
        .catch(function () {
          console.log("Something went wrong")
          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.positions = {};
        });

    }

})
.controller('PreviewController', function($sce, $scope, $location, LetterService, $http) {

  var docId = LetterService.getletter();

  $http.get('/generateLetter/' + docId)
  .then(function(res) {
    $scope.pageHtml = $sce.trustAsHtml(res.data)
  })

  

});