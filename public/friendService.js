angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      return $http({
      method: 'POST',
      url: '/api/login',
      data: { currentUser }
    })/* FIX ME */
  };

    this.getFriends = function() {
      return $http({
      method: 'GET',
      url: '/api/profiles'
    })/* FIX ME */
    };

});
