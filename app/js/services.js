'use strict';

/* Services */

var productcatServices = angular.module('productcatServices', ['ngResource']);

productcatServices.factory('Product', ['$resource',
  function($resource){
    return $resource('products/:productId.json', {}, {
      query: {method:'GET', params:{productId:'products'}, isArray:true}
    });
  }]);
