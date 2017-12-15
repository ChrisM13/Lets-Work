var User = require('../models/user');

function create(req, res) {
    console.log("req.body", req.body)
    console.log("hitting the sch controller")
};

module.exports = {
    create
}
