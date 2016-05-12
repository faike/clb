angular.module('letterbot').factory('AuthService',
  ['$q', '$timeout', '$http',
  function ($q, $timeout, $http) {

    // create user variable
    var user = null;


    function isLoggedIn() {
      if(user) {
        return true;
      } else {
        return false;
      }
    }

    function getUserStatus() {
      return user;
    }

    function login(username, password) {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a post request to the server
      $http.post('/login',
        {username: username, password: password})
        // handle success
        .success(function (data, status) {
          if(status === 200 && data.status){
            user = true;
            deferred.resolve();
          } else {
            user = false;
            deferred.reject();
          }
        })
        // handle error
        .error(function (data) {
          user = false;
          deferred.reject();
        });

      // return promise object
      return deferred.promise;

    }

    function logout() {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a get request to the server
      $http.get('/logout')
        // handle success
        .success(function (data) {
          user = false;
          deferred.resolve();
        })
        // handle error
        .error(function (data) {
          user = false;
          deferred.reject();
        });

      // return promise object
      return deferred.promise;

    }

    function register(username, password) {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a post request to the server
      $http.post('/register',
        {username: username, password: password})
        // handle success
        .success(function (data, status) {
          if(status === 200 && data.status){
            deferred.resolve();
          } else {
            deferred.reject();
          }
        })
        // handle error
        .error(function (data) {
          deferred.reject();
        });

      // return promise object
      return deferred.promise;

    }

    // return available functions for use in the controllers
    return ({
      isLoggedIn: isLoggedIn,
      getUserStatus: getUserStatus,
      login: login,
      logout: logout,
      register: register
    });

}])


.factory('LetterService', ['$q', '$timeout', '$http', function ($q, $timeout, $http){

  var letter = null;

  function createLetter (firstname, lastname) {

      var deferred = $q.defer();

      // send a post request to the server
      console.log(firstname, lastname);
      $http.post('/letter',
        {firstname: firstname, lastname: lastname})
        // handle success
        .success(function (data, status) {
          if(status === 200 && data.status){
            letter = data.id;
            deferred.resolve();

          } else {
            deferred.reject();
          }
        })
        // handle error
        .error(function (data) {
          deferred.reject();
        });

      // return promise object
      return deferred.promise;

  }

  function updateLetter (data) {
    var deferred = $q.defer();

    if(letter == null) {
      console.log("Letter is null")
      return deferred.reject()
    }


    $http.put('/letter/' + letter, data)
     .success(function (data, status) {
        if(status === 200 && data.status) {

            console.log(letter, "Updated")
            deferred.resolve();

          } else {
            deferred.reject();
          }
     })
     .error(function (data) {
          deferred.reject();
      });

     return deferred.promise

  }

  function generateLetter () {

    if(letter ==null) {
      console.log("Letter is null")
      return;
    }

    $http.get('/generateLetter/' +letter)
    .then(function(res) {
      console.log(res.data)

      return res.data;

    })
    .else(function() {
      console.log("GENERATE FAILED")
    })

  }

  function getletter() {
    return letter;
  }

  return ({
    getletter: getletter,
    createLetter: createLetter,
    updateLetter: updateLetter,
    generateLetter: generateLetter
  });




}]);




