var User = require('../models/user');
var Schedule = require('../models/schedule')

function create(req, res) {
    console.log("req.body", req.body)
    console.log("hitting the sch controller")

    var schedule = new Schedule(req.body)
    schedule.save()
        .then(data => {
            console.log('this is the data', data)
            res.json(data)
        })
        .catch(err => res.status(400).json(err));
};

module.exports = {
    create
}