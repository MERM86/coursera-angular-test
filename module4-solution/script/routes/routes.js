(function () {
'use strict';

angular.module('MenuApp')
  .config(RoutesConfig);


RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'html/templates/home.template.html'
  })

  // Categories list page
  .state('categories', {
    url: '/categories',
    templateUrl: '../html/templates/categories.template.html',
    controller :'CategoriesController as categoriesController'
  })

  // Item detail
  .state('categories.items', {
    url: '/item-detail/{short_name}',
    templateUrl: '../html/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetailController',
    resolve   :{
                 items : ['$stateParams','DataService', function ($stateParams,DataService){
                                return DataService.getItemsForCategory($stateParams.short_name)
                                        .then(function(response){
                                          return response;
                                        })
                                        .catch(function(error){
                                          return [];
                                        });
                                }
                              ]
                }
  });

}

})();
