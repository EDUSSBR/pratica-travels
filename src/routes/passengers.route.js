import { Router } from "express";
import passengerController from "../controllers/passengers.controller.js";
const router = Router()

router.get('/passengers/travels', passengerController.getPassengers)

export default router