var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

var CreditSchema = new Schema({
    amount: { type: Number, required: true },
    note: { type: String, required: true },
    createdAt: Date,
    updatedAt: Date
})

CreditSchema.pre('save', function(next) {
    now = new Date();
    this.updatedAt = now;

    if( !this.createdAt ) {
        this.createdAt = now;
    }
    next();
})

var CreditModel = mongoose.model("Credit", CreditSchema);

module.exports = {
  Credit: CreditModel,
};