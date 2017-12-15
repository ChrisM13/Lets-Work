const express = require('express');
const router = express.Router();
const employeeCtrl = require('./../../controllers/employees');

router.post('/', employeeCtrl.create);

module.exports = router;