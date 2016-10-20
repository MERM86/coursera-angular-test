(function () {
'use strict';

angular.module('NarrowItDownApp', [])
       .controller('NarrowItDownController', NarrowItDownController)
       .service('MenuSearchService', MenuSearchService)
       .directive('listItemMenu',ListItemMenu)
       .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function ListItemMenu(){
 var ddo ={
       restrict: "E",
       templateUrl: 'directives/listItem.html',
       scope: {
          items: '<ctrList',
          //filterList: '<filterList',
          removeItem: '&'
        }/*,
        controller:InternalController,
        controllerAs: 'list',
        bindToController: true*/
     };
  return ddo;
}

//Controller 1
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
    var searchItemsCtr = this;
    searchItemsCtr.ajaxActive = false;
    searchItemsCtr.notFound = false;
    //searchItemsCtr.found = MenuSearchService.getList();
    searchItemsCtr.search = function (searchTerm){
        if(searchTerm !==''){
              searchItemsCtr.found = null;
              searchItemsCtr.ajaxActive = true;
              var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
              promise.then(function(datos){
                if(datos.length ==0){
                    searchItemsCtr.notFound = true;
                }else{
                    searchItemsCtr.notFound = false;
                }
                searchItemsCtr.found = datos;
                searchItemsCtr.ajaxActive = false;
              }).catch(function(error){
                searchItemsCtr.ajaxActive = false;
              });
        }else{
              searchItemsCtr.notFound = true;
        }
      };
    searchItemsCtr.removeItem = function(obj){
      searchItemsCtr.found.splice(obj.index,1);
  };

}

MenuSearchService.$inject =['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath){
  var service = this;
  var itemsFound =[];

service.getMatchedMenuItems = function(searchTerm){
    return $http({method: "GET",
                  url: (ApiBasePath + "/menu_items.json")
                  })
            .then(function(response){
                  var  total = response.data.menu_items;
                  var foundItems =[]
                      angular.forEach(total, function(val, key) {
                            if(val.description && val.description.indexOf(searchTerm) != -1)
                            {
                                foundItems.push(val);
                            }
              });
             return foundItems;
           });
            /*.catch(function(error){
                      return [];
            });*/
  };
  /*service.getList = function(){
    return itemsFound;
  };*/
}
})();
