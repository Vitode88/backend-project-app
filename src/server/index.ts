import morgan from "morgan";
import express from "express";
import { TripModel } from "../database/models/TripsSchema";
import tripsRouter from "./routes/tripsRouter";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/trips", tripsRouter);

export default app;
