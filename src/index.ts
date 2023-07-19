import connectDB from "./database";
import "./loadEnvironment";
import startServer from "./server/startServer";

const mongoURL = process.env.MONGODB_URL;
const port = +process.env.PORT || 3100;

(async () => {
    try {
        await connectDB(mongoURL);
        await startServer(port);
    } catch (error) {
        process.exit(1);
    }
})();
