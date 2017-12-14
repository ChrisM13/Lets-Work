const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// these are lists of appropriate times doesn't care about which date

const shiftSchema = new Schema ({
    time: String
})

//when seeding the database set the shift time to 8-5 etc.
module.exports = mongoose.model("User", userSchema)