// app.js

var linkApp = angular.module('linkApp', []);

linkApp.controller('mainController', ['$scope', function($scope) {
	
	// set default bootswatch
	$scope.css = 'cosmo';
	
	// create list of bootswatches
	$scope.bootstraps = [
		{
			name: 'Basic',
			url: 'cosmo'
		},
		{
			name: 'Slate',
			url: 'slate'
		},
		{
			name: 'Sandstone',
			url: 'sandstone'
		}
	];
	
	// set default layout
	$scope.layout = 'normal';
	
	// create list of layout files
	$scope.layouts = [
		{
			name: 'Boring',
			url: 'normal'
		},
		{
			name: 'Circles',
			url: 'circle'
		},
		{
			name: 'In Your Face',
			url: 'large'
		}
	];
	
}]);
