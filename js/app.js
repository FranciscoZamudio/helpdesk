//creamos el modulo y le aplicamos la configuración
//var moduleApp = angular.module("moduleApp", ["ngRoute"]).config(configRoutes);
var moduleApp = angular.module('moduleApp', ['ui.router']);

moduleApp.config(function ($stateProvider,$urlRouterProvider) {

    var ticketsState = {
        name: 'tickets',
        url: '/tickets',
        templateUrl: 'views/tickets.html',
        controller: 'ticketsController'
    }

    var dashboardState = {
        name: 'dashboard',
        url: '/dashboard',
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardController'
    }
    var metricsState = {
        name: 'metrics',
        url: '/metrics',
        templateUrl: 'views/metrics.html',
        controller: 'metricsController'
    }


    $stateProvider.state(ticketsState);
    $stateProvider.state(dashboardState);
    $stateProvider.state(metricsState);
    $urlRouterProvider.otherwise('/tickets');

});
