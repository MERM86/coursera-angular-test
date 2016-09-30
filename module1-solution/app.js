(function () {
'use strict';

angular.module('LunchApp', [])
       .controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];

function LunchController($scope) {
  $scope.order = '';
  $scope.msgCheck ='';
  $scope.checkLunch = function(){
    var count = 0;
    if($scope.order != '' ){
      var items = $scope.order.split(',');
      angular.forEach(items, function(val, key) {
          if(val != '' && val.trim() !=  ''){
            count ++;
          }
      });
    }
    if(count > 0 && count <= 3){
      $scope.msgCheck = 'Enjoy!';
      $scope.style1 = 'msg-info';
    }else if(count >3){
      $scope.msgCheck = 'To much!';
      $scope.style1 = 'msg-info';
    }else{
      $scope.style1 = 'msg-error';
      $scope.msgCheck = 'Please enter data first';
    }
  };
}

})();
