CreditsService.$inject = ['$http']

function CreditsService($http) {
    var self = this;
    
    self.getAllCreditsFromDatabase = function () {
        return $http.get('credits/');
    }

    self.addNewCreditToDatabase = function (newCredit) {
        return $http.post('credits/', newCredit);
    }

    self.deleteIdFromDatabase = function (creditIdToDeleteFromDatabase) {
        return $http.delete('credits/' + creditIdToDeleteFromDatabase);
    }

    self.getSingleCreditById = function (creditIdToShow) {
        return $http.get('credits/' + creditIdToShow);
    }

    self.updateSingleCredit = function (creditToUpdate) {
        return $http.patch('credits/', creditToUpdate);
    }
}

angular
    .module('BudgetApp')
    .service('CreditsService', CreditsService);