(function(){
  'use strict';

  angular.module('public')
    .controller('SignupController',SignupController);

  SignupController.$inject =['MenuService','UserPreferenceService'];

  function SignupController(MenuService,UserPreferenceService){
    var signCtrl = this;
    signCtrl.error=false;
    signCtrl.displayMessage = false;
    signCtrl.userdata ={ firstName:'',lastName :'',email    :'',phoneNumber:'',dish:'',preference:{}};

    signCtrl.setPreferences = function(short_name){
        MenuService.getPreference(short_name).then(function(response){
           signCtrl.userdata.preference = response;
           UserPreferenceService.saveUserPreferences(signCtrl.userdata);
           signCtrl.error=false;
           signCtrl.displayMessage = true;
          }
        ).catch(function(error){
          signCtrl.error=true;
          signCtrl.displayMessage = false;
        });
    };
    signCtrl.getPreferences = function(short_name){
        return UserPreferenceService.getUserPreferences();
    };
    signCtrl.isLogin = function(){
      var bandera= false;
      var obj =UserPreferenceService.getUserPreferences();
      for(var key in obj) {
        if(obj.hasOwnProperty(key))
            bandera = true;
        }
    return bandera;

    };
  }

})();
