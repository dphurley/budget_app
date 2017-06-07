require('angular-ui-router');
const angular = require('angular');

angular.module('BudgetApp', ['ui.router']).config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('credits', {
            url: '/credits',
            template: '<credits></credits>'
        })
        .state('show_credit/:creditId', {
            url: '/show_credit/:creditId',
            params: [ 'creditId' ],
            template: '<show-credit></show-credit>'
        })
        .state('edit_credit/:creditId', {
            url: '/edit_credit/:creditId',
            params: [ 'creditId' ],
            template: '<edit-credit></edit-credit>'
        });;

    $urlRouterProvider.otherwise('/');

}