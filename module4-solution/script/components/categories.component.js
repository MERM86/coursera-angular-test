(function(){
  'use strict';
  angular.module('DataModule')
  .component('categoriesList',{
    templateUrl: '../../html/components/categories-component.html',
    //controller:CategoriesListController,
    bindings: {
      categories: '<'
    }
  });

/*  CategoriesListController.$inject  = ['DataService'];

  function CategoriesListController(DataService){
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
  }*/

})();
