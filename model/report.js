const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 
const reportSchema = new Schema({
    report_date: String,
    content: String,
    score: Number,
});
 
module.exports = mongoose.model('report', reportSchema);
