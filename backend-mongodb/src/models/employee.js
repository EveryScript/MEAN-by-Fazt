// --- E M P L O Y E E  M O D E L ---
const { Schema, model } = require('mongoose');

// Creating structure
const employeeSchema = new Schema({
    name:       { type: String, required: true },
    position:   { type: String, required: true },
    office:     { type: String, required: true },
    salary:     { type: String, required: true }
}, {
    timestamps: true, // Save when creating and updating data
    versionKey: false // Not save subdata version
});

module.exports = model('Employee', employeeSchema);