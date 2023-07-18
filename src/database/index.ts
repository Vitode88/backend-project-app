import mongoose, { ConnectOptions } from "mongoose";
import chalk from "chalk";

const connectDB = (mongoUrl: string) =>
    new Promise((resolve, reject) => {
        mongoose.set("toJSON", {
            virtuals: true,
            transform: (doc, ret) => {
                const newDocument = { ...ret };
                delete newDocument.__v;
                delete newDocument._id;
                delete newDocument.password;

                return newDocument;
            },
        });

        mongoose.set("strictQuery", false);

        mongoose.connect(mongoUrl, {}).then(
            () => {
                console.log(
                    chalk.bgBlue.white("Successfully connected with database")
                );
                resolve(true);
            },
            (err) => {
                console.log(
                    chalk.bgRed.white(
                        "An error occurred connecting with database",
                        err.message
                    )
                );
                reject(err);
            }
        );
    });

export default connectDB;
