(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://dextor-415-module-5-example.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
