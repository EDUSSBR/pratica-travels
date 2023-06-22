import { Router } from "express";
import passengersRoute from './passengers.route.js'

const router = Router()

router.use(passengersRoute)

export default router