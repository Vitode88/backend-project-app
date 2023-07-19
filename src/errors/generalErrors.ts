import { NextFunction, Request, Response } from "express";
import CustomError from "./CustomError";
import { ValidationError } from "express-validation";
import chalk from "chalk";

export const notFoundError = (res: Response) => {
    res.statusCode = 404;
    res.json({ error: "Oops! Page not found :(" });
};

export const generalError = (
    error: CustomError,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
) => {
    let errorCode;
    let errorMessage;

    if (error instanceof ValidationError) {
        console.log(chalk.red("Request validation errors: "));
        error.details.body.forEach((errorInfo) => {
            console.log(chalk.red(errorInfo.message));
        });

        errorCode = error.statusCode;
        errorMessage = "Wrong data";
    } else {
        errorCode = error.statusCode ?? 500;
        errorMessage = error.publicMessage ?? "Something went wrong";

        console.log(chalk.bgRed.white(error.message));
    }
    res.statusCode = errorCode;
    res.json({ error: errorMessage });
};
