'use strict';

/* Controllers */

var productcatControllers = angular.module('productcatControllers', []);

productcatControllers.controller('ProductListCtrl', ['$scope', 'Product',
  function($scope, Product) {
    $scope.products = Product.query();
  }]);

productcatControllers.controller('ProductDetailCtrl', ['$scope', '$routeParams', 'Product',
  function($scope, $routeParams, Product) {
    $scope.product = Product.get({ productId: $routeParams.productId});
    console.log($scope.product);
  }]);
