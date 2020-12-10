import { Schema, model } from 'mongoose'

import { datesEmployees } from '../../types/types'

const EmployeeSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    bornDate: {
        type: Date,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    }
});


export default model<datesEmployees>("Employees", EmployeeSchema);;