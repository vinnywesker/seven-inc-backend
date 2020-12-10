import { Document } from "mongoose"

export interface datesEmployees extends Document {
    name: String,
    bornDate: Date,
    salary: Number,
    position: String
}