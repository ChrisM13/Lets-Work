var User = require('../models/user');

function editSchedule(req, res) {
    var paramsId = req.params.id.toString()
    var updatedUser = {
        schedule: req.body.schedules[paramsId]
    }

    User.findByIdAndUpdate(req.params.id, updatedUser)
        .then(user => {
            console.log('user =', user)
            res.json({user})
        })
        .catch(err => console.error(err))
}

module.exports = {
    editSchedule
}
