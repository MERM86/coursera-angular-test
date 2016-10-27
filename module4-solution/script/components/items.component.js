(function(){
'use strict';
angular.module('DataModule')
       .component('itemdetails',{
                  templateUrl: '../../html/components/item-component.html',
                  bindings: {
                        items: '<'
                            }
                      });
})();
