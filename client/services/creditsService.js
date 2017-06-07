CreditsService.$inject = ['$http']

function CreditsService($http) {
    var self = this;
    
    self.getAllCreditsFromDatabase = function () {
        return $http.get('/credits');
    }

    self.addNewCreditToDatabase = function (newCredit) {
        return $http.post('http://localhost:3000/credits', newCredit)
    }
}

angular
    .module('BudgetApp')
    .service('CreditsService', CreditsService);