ShowCreditController.$inject = ['$state', '$stateParams', 'CreditsService']

function ShowCreditController($state, $stateParams, CreditsService) {
    
    var vm = this;

    const creditIdToShow = $stateParams.creditId;

    CreditsService.getSingleCreditById(creditIdToShow)
        .then(
            function success(response) {
                vm.creditEntry = response.data;
            },
            function failure(response) {
                console.log('Failed to retrieve information for Credit with ID of ' + creditIdToShow)
            }
        )

}

module.exports = ShowCreditController;