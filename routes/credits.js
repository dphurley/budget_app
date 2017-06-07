var express = require('express');
var router = express.Router();

var Credit = require('../models/credit');

router.get('/', (request, response) => {

    // Find all of the Credits from the database
    Credit.find({}).exec(function (error, credits) {
        if(error) {
            console.log('Error retrieving credits!');
            console.log('Error: ' + error);
            return;
        }

        // if there are no errors, send the credits back as JSON        
        response.send(credits);
    })

})

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
})

module.exports = router;