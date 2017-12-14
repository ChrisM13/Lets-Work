const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        require: true,
        lowercase: true,
        unique: true
    },
    password: String,
    manager: {
        type: Boolean, 
        default: false
    },
    }, {
    timestamps: true
});

var user = {
    schedule: [
        {
            day: 'monday',
            shiftId: 123
        },
        {
            day: 'tuesday',
            shiftId: 456
        }
    ]
}

userSchema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret.password;
        return ret;
    }
});

userSchema.pre('save', function(next) {
    //this will be set to the current doc
    var user = this;
    if(!user.isModified('password')) return next();
    //password has been changed - salt and hash it
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        if(err) return next(err);
        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb)
        
        // function(err, isMatch) {
        // cb(null, isMatch);
    // });
};

module.exports = mongoose.model("User", userSchema)