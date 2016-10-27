(function(){
  'use strict';

  angular.module('DataModule')
    .controller('ItemDetailController',ItemDetailController);

  ItemDetailController.$inject = ['items'];
  function ItemDetailController(items){
     var controller = this;
     controller.items = items;

  }

})();
