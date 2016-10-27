(function(){
  'use strict';

  angular.module('DataModule')
  .controller('CategoriesController',CategoriesController);

  CategoriesController.$inject  = ['DataService'];
  function CategoriesController(DataService){
    var controller = this;
    controller.categories =[];

    controller.getAllCategories =function(){
       var promise = DataService.getAllCategories();

         promise
         .then(function(response){
              controller.categories = response;
           })
         .catch(function(error){
              controller.categories = [];
           });
      };
    controller.$onInit = function(){
        controller.getAllCategories();
    };
  }
})();
