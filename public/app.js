var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/')
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: "html/home.html",
			controller: "myCtrl"
		})
})