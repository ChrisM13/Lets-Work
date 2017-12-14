const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema ({
    employees: []

})

module.exports = mongoose.model("Schedule", scheduleSchema)