'use strict';

/* App Module */

var productcatApp = angular.module('productcatApp', [
  'ngRoute',

  'productcatControllers',
  'productcatServices'
]);

productcatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/products', {
        templateUrl: 'partials/product-list.html',
        controller: 'ProductListCtrl'
      }).
      when('/products/:productId', {
        templateUrl: 'partials/product-detail.html',
        controller: 'ProductDetailCtrl'
      }).
      otherwise({
        redirectTo: '/products'
      });
  }]);
