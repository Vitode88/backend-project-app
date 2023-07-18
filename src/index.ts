import connectDB from "./database";
import "./loadEnvironment";

const mongoURL = process.env.MONGODB_URL;

(async () => {
    try {
        await connectDB(mongoURL);
    } catch (error) {
        process.exit(1);
    }
})();
