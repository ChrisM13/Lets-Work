const express = require('express');
const router = express.Router();
const employeeCtrl = require('./../../controllers/employees');

router.post('/', employeeCtrl.create);
router.put('/:id/schedule', employeeCtrl.editSchedule);

module.exports = router;