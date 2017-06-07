CreditsService.$inject = ['$http']

function CreditsService($http) {
    var self = this;
    
    self.getAllCreditsFromDatabase = function () {
        return $http.get('/credits');
    }

    self.addNewCreditToDatabase = function (newCredit) {
        return $http.post('/credits', newCredit)
    }

    self.deleteIdFromDatabase = function (creditIdToDeleteFromDatabase) {
        return $http.delete('/credits/' + creditIdToDeleteFromDatabase);
    }
}

angular
    .module('BudgetApp')
    .service('CreditsService', CreditsService);