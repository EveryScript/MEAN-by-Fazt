// R O U T I N G
const { Router } = require('express');
const router = Router(); // Setting Express Routing
const employees = require('../controllers/employees.controller');

router.get('/', employees.getEmployees);
router.get('/:id', employees.getEmployee);
router.post('/', employees.createEmployee);
router.put('/:id', employees.updateEmployee);
router.delete('/:id', employees.deleteEmployee);

module.exports = router; // Exporting configuration (router)