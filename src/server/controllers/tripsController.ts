import { NextFunction, Request, Response } from "express";
import { TripModel } from "../../database/models/TripsSchema";

import CustomError from "../../errors/CustomError";

export const getAllTrips = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const trips = await TripModel.find();
        res.status(200).json({ trips });
    } catch (error) {
        const finalError = new CustomError(
            400,
            "Error loading trips.",
            "Error loading trips."
        );
        next(finalError);
    }
};
