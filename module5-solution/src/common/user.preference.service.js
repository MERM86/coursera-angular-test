(function(){

  'use strict'

  angular.module('common').
  service('UserPreferenceService',UserPreferenceService);

  function UserPreferenceService(){
    var userpreference = this;
    userpreference.preferences ={};

    userpreference.saveUserPreferences = function(UserPreference){
      userpreference.preferences =UserPreference;
    };
    userpreference.getUserPreferences = function(email){
      return userpreference.preferences;
    };
  };

})();
