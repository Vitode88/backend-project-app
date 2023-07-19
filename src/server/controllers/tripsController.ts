import { NextFunction, Request, Response } from "express";

import CustomError from "../../errors/CustomError";

/* export const getAllTrips = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json({ products });
    } catch (error) {
        const finalError = new CustomError(
            400,
            "Error loading products.",
            "Error loading products."
        );
        next(finalError);
    }
}; */
