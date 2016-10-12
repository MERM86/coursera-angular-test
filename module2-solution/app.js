(function () {
'use strict';

angular.module('Shopping', [])
       .controller('ShoppingItemListController', ShoppingItemListController)
       .controller('BoughtItemListController', BoughtItemListController)
       .provider('ShoppingListService', ShoppingListServiceProvider)
       .config(Config);

//Config
Config.$inject = ['ShoppingListServiceProvider'];
function Config(ShoppingListServiceProvider) {
      ShoppingListServiceProvider.defaults ={
                  buyList :[{name:'Cookies',quantity:10},{name:'Rice',quantity:1},{name:'Sugar Drink',quantity:10},{name:'Coffee',quantity:10},{name:'Lays',quantity:10}],
                  boughtList :[]
         }
 }

//Controller 1
ShoppingItemListController.$inject = ['ShoppingListService'];
function ShoppingItemListController(ShoppingListService){
  var list = this;
  list.items = ShoppingListService.getShoopingList();
  list.addItem = function(){
      ShoppingListService.addItemShoopingList(list.name,list.quantity);
  };
  list.buyItem = function(index){
      ShoppingListService.buyItem(index);
  };

}
//Controller 2
BoughtItemListController.$inject = ['ShoppingListService'];
function BoughtItemListController(ShoppingListService){
  var list = this;
  list.items = ShoppingListService.getBoughtList();
  list.cancelItem = function(index){
    ShoppingListService.cancelItem(index);
  }
}
function ShoppingListService(itemsDefault){
  var service = this;

  var itemsBuy    =[];
  var itemsBougth =[];
    if(itemsDefault && itemsDefault.length>0){
      itemsBuy =itemsDefault;
    }
  service.addItemShoopingList = function(name,quantity){
    var item = {
            name: name,
            quantity: quantity
          };
          itemsBuy.push(item);
  };
  service.buyItem = function(itemIndex){
    itemsBougth.push(itemsBuy[itemIndex]);
    itemsBuy.splice(itemIndex,1);
  };
  service.cancelItem = function(itemIndex){
    itemsBougth.splice(itemIndex, 1);
  };
  service.getShoopingList = function(){
    return itemsBuy;
  };
  service.getBoughtList = function(){
    return itemsBougth;
  };
}
function ShoppingListServiceProvider() {
  var provider = this;
      provider.defaults ={
        buyList:[],
        boughtList:[]
      }
  provider.$get = function () {
    var shoppingList = new ShoppingListService(provider.defaults.buyList,provider.defaults.boughtList);
    return shoppingList;
  };
}

})();
