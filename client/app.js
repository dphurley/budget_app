require('angular-ui-router');
require('angular-messages');
const angular = require('angular');

angular.module('BudgetApp', ['ui.router', 'ngMessages']).config(uiRouterSetup);

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
        })
        .state('expenses', {
            url: '/expenses',
            template: '<expenses></expenses>'
        })
        .state('show_expense/:expenseId', {
            url: '/show_expense/:expenseId',
            params: [ 'expenseId' ],
            template: '<show-expense></show-expense>'
        })
        .state('edit_expense/:expenseId', {
            url: '/edit_expense/:expenseId',
            params: [ 'expenseId' ],
            template: '<edit-expense></edit-expense>'
        });

    $urlRouterProvider.otherwise('/');
}