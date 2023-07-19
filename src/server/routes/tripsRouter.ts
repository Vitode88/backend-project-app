import express from "express";
import { getAllTrips } from "../controllers/tripsController";

const tripsRouter = express.Router();

tripsRouter.get("/", getAllTrips);

export default tripsRouter;
