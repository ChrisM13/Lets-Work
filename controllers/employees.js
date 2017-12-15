var User = require('../models/user');

function create(req, res) {
    console.log("req.body", req.body)
    console.log("hitting the sch controller")
    // find all users. push to users.schedule
};

function editSchedule(req, res) {
    console.log('req.params =', req.params)
    console.log('req.body =', req.body);
    res.json({test: 'hello'});
}

module.exports = {
    create,
    editSchedule
}
