var express = require('express');
var router = express.Router();

var Expense = require('../models/expense');

router.get('/', (request, response) => {

    // Find all of the Expenses from the database
    Expense.find({}).exec(function (error, expenses) {
        if (error) {
            console.log('Error retrieving expenses!');
            console.log('Error: ' + error);
            return;
        }

        // if there are no errors, send the expenses back as JSON    
        console.log(expenses);
        response.send(expenses);
    })

})

router.get('/:expenseId', function (request, response) {

    const expenseIdToShow = request.params.expenseId;

    Expense.findById(expenseIdToShow, function (error, foundExpense) {
        if (error) {
            console.log('Error finding Expense with ID of ' + expenseIdToShow);
            return;
        }

        response.send(foundExpense);
    });

});

router.post('/', (request, response) => {

    // grab the new Expense info from the request
    let expenseFromRequest = request.body;

    // then build a new Expense model with the info
    // REMEMBER: the new Date will be created by the database
    let newExpense = new Expense({
        amount: expenseFromRequest.amount,
        note: expenseFromRequest.note
    });

    // save the new Expense model to the database
    newExpense.save(function (error, newExpense) {
        if (error) {
            console.log(error);
            return;
        }

        // once the new expense has been saved, return it to the client
        response.send(newExpense);
    });
});

router.patch('/', function (request, response) {

    let expenseToUpdate = request.body;

    console.log(expenseToUpdate);

    Expense.findByIdAndUpdate(expenseToUpdate._id, expenseToUpdate, { new: true })
        .exec(function (error, updatedExpense) {

            if (error) {
                console.log("Error while updating Expense with ID of " + expenseToUpdate.id);
                return;
            }

            response.send(200);

        });
});

router.delete('/:expenseId', function (request, response) {

    const expenseIdToDelete = request.params.expenseId;

    Expense.findByIdAndRemove(expenseIdToDelete).exec(function (error) {
        if (error) {
            console.log("Error while deleting Expense with ID of " + expenseIdToDelete);
            return;
        }

        // once the expense has been deleted, tell the server everything was successful
        response.sendStatus(200);
    })

});



module.exports = router;
