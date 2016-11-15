angular.module('mngController', [])


	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http', function($scope, $http, $route, SOCIAL_PLUGINS, $location) {
		$scope.formData = {};
		$scope.loading = true;

		$scope.SOCIAL_PLUGINS = SOCIAL_PLUGINS;
  
  $scope.pluginOn = true;
  $scope.rendering = false;
  
  $scope.goto = function (dirTag) {
    $location.path('/' + dirTag);
  };
  
  $scope.isActive = function (dirTag) {
    return ($location.path() === '/' + dirTag);
  };
  
  $scope.rendered = function () {
    $scope.rendering = false;
  };
  
  $scope.$watch('pluginOn', function (newVal, oldVal) { 
    if (newVal !== oldVal) {
      $scope.rendering = true;
    }
  });
  
  $scope.$on('$routeChangeSuccess', function () {
    $scope.rendering = true;
  });

	}]);