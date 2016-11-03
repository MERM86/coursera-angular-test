(function(){

  'use strict';

  angular.module('public').
  component('myInfo',{
                      templateUrl: 'src/public/myinfo/myinfocomponent.html',
                      bindings: {
                                userPreferences: '<'
                      },
                      controller: MyInfoController
  });
MyInfoController.$inject =['ApiPath'];
function MyInfoController(ApiPath){
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
};
})();
