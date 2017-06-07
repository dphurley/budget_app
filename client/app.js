require('angular-ui-router');
const angular = require('angular');

angular.module('BudgetApp', ['ui.router']).config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: '<a ui-sref="credits">credits</a>'
        })
        .state('credits', {
            url: '/credits',
            template: '<credits></credits>'
        })
        .state('show_credit/:creditId', {
            url: '/show_credit/:creditId',
            params: [ 'creditId' ],
            template: '<show-credit></show-credit>'
        });

    $urlRouterProvider.otherwise('/');

}