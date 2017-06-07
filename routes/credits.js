var express = require('express');
var router = express.Router();

var Credit = require('../models/credit');

router.get('/', (request, response) => {

    // Find all of the Credits from the database
    Credit.find({}).exec(function (error, credits) {
        if (error) {
            console.log('Error retrieving credits!');
            console.log('Error: ' + error);
            return;
        }

        // if there are no errors, send the credits back as JSON    
        console.log(credits);
        response.send(credits);
    })

})

router.get('/:creditId', function (request, response) {

    const creditIdToShow = request.params.creditId;

    Credit.findById(creditIdToShow, function (error, foundCredit) {
        if (error) {
            console.log('Error finding Credit with ID of ' + creditIdToShow);
            return;
        }

        response.send(foundCredit);
    });

});

router.post('/', (request, response) => {

    // grab the new Credit info from the request
    let creditFromRequest = request.body;

    // then build a new Credit model with the info
    // REMEMBER: the new Date will be created by the database
    let newCredit = new Credit({
        amount: creditFromRequest.amount,
        note: creditFromRequest.note
    });

    // save the new Credit model to the database
    newCredit.save(function (error, newCredit) {
        if (error) {
            console.log(error);
            return;
        }

        // once the new credit has been saved, return it to the client
        response.send(newCredit);
    });
});

router.patch('/', function (request, response) {

    let creditToUpdate = request.body;

    console.log(creditToUpdate);

    Credit.findByIdAndUpdate(creditToUpdate._id, creditToUpdate, { new: true })
        .exec(function (error, updatedCredit) {

            if (error) {
                console.log("Error while updating Credit with ID of " + creditToUpdate.id);
                return;
            }

            response.send(200);

        });
});

router.delete('/:creditId', function (request, response) {

    const creditIdToDelete = request.params.creditId;

    Credit.findByIdAndRemove(creditIdToDelete).exec(function (error) {
        if (error) {
            console.log("Error while deleting Credit with ID of " + creditIdToDelete);
            return;
        }

        // once the credit has been deleted, tell the server everything was successful
        response.sendStatus(200);
    })

});



module.exports = router;
