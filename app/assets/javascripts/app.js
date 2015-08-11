var app = angular.module('BookApp', [
  'templates',
  'ui.router',
  'rails'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home#index', {
      url: '',
      templateUrl: 'books/index.html'
    });
});