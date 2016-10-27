(function(){
'use strict';

angular.module('DataModule')
  .service('DataService',DataService)
  .constant('ApiBasePath','https://davids-restaurant.herokuapp.com');

  DataService.$inject = ['$http', 'ApiBasePath'];

function DataService($http , ApiBasePath){
  var service = this;

  service.getAllCategories = function(){
    return $http({method: "GET",
                url: (ApiBasePath + "/categories.json")
                })
          .then(function(response){
                return response.data;
         })
         .catch(function(error){
                return [];
         });
  };
service.getItemsForCategory = function(categoryShortName){
    return $http({method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
                params:{category:categoryShortName}
                })
          .then(function(response){
                return response.data.menu_items;
         })
         .catch(function(error){
                return [];
         });
  };
}
})();
