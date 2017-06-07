CreditsController.$inject = ['$http'];

function CreditsController($http) {

    let vm = this;

    /**
     * We will run this function the first time we load our component.
     * 
     * We can use an 'initialize' function to pre-load some data
     * from the database.
     */
    function initialize() {
        getCreditsFromDatabase();
    }
    initialize();

    function getCreditsFromDatabase() {
        $http.get('/credits').then(
            function success(response) {
                vm.creditEntries = response.data;
            },
            function failure(response) {
                console.log('Error retrieving Credit Entries from database!');
            }
        );
    }

    // This function handles our form submission.
    vm.addCredit = function () {

        // the new Credit object will be created by binding to the form inputs
        const newCredit = {
            amount: vm.newCreditAmount,
            note: vm.newCreditNote
        };

        // Make an ajax call to save the new Credit to the database:
        $http.post('http://localhost:3000/credits', newCredit)
            .then(
                function success(response) {
                    // only push to the creditEntries array if the ajax call is successful
                    const newCreditFromDatabase = response.data;
                    console.log(response.data);
                    vm.creditEntries.push(newCreditFromDatabase);
                    // then reset the form so we can submit more credits
                    resetForm();
                },
                function failure(response) {
                    // if the http call is not successful, log the error 
                    // DO NOT clear the form
                    // DO NOT push the new object to the array
                    console.log('Error saving new Credit to database!');
                }
            )
    }

    // this function can be used to clear the credits form
    function resetForm() {
        vm.newCreditAmount = '';
        vm.newCreditNote = '';
    }

}

module.exports = CreditsController;