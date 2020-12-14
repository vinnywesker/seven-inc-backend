import { Document } from "mongoose"

export interface datesEmployees extends Document {
    name: String,
    bornDate: String,
    salary: Number,
    position: String
}