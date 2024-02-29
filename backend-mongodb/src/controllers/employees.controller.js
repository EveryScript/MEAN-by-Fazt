// E M P L O Y E E S
const Employee = require('../models/employee');

const employeesController = {
    getEmployees: async (req, res) => {
        const employees = await Employee.find(); // Async method type
        res.json(employees);
    },
    createEmployee: async (req, res) => {
        if (req.body.name && req.body.position && req.body.office && req.body.salary) {
            const employee = new Employee(req.body);
            await employee.save();
            res.send({ message: 'Employee saved' })
        } else {
            res.send({ message: 'Error, some employee data is invalid' })
        }
    },
    updateEmployee: async (req, res) => {
        if (req.body.name && req.body.position && req.body.office && req.body.salary) {
            const employee = await Employee.findByIdAndUpdate(req.params.id, req.body);
            res.send({ message: "Employee updated!", employee });
        } else {
            res.send({ message: 'Error, some employee data is invalid' })
        }
    },
    getEmployee: async (req, res) => {
        const employee = await Employee.findById(req.params.id);
        res.send(employee);
    },
    deleteEmployee: async (req, res) => {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        res.send({ message: "Employee deleted!" });
    },
};

module.exports = employeesController;