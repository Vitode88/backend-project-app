import { model, Schema } from "mongoose";

const tripSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    dateFrom: {
        type: Date,
        required: true,
    },
    dateTo: {
        type: Date,
        required: true,
    },
    availability: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    practicalInformation: {
        type: String,
        required: true,
    },
});

export const TripModel = model("Trip", tripSchema, "trips");
