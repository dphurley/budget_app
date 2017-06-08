ExpensesService.$inject = ['$http']

function ExpensesService($http) {
    var self = this;
    
    self.getAllExpensesFromDatabase = function () {
        return $http.get('expenses/');
    }

    self.addNewExpenseToDatabase = function (newExpense) {
        return $http.post('expenses/', newExpense);
    }

    self.deleteIdFromDatabase = function (expenseIdToDeleteFromDatabase) {
        return $http.delete('expenses/' + expenseIdToDeleteFromDatabase);
    }

    self.getSingleExpenseById = function (expenseIdToShow) {
        return $http.get('expenses/' + expenseIdToShow);
    }

    self.updateSingleExpense = function (expenseToUpdate) {
        return $http.patch('expenses/', expenseToUpdate);
    }
}

angular
    .module('BudgetApp')
    .service('ExpensesService', ExpensesService);