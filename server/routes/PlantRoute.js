import { Router } from "express";
import { getPlant, addPlant, searchPlants } from "../controller/PlanetController.js";

const router = Router();

router.route('/getPlant').get(getPlant);
router.route('/addPlant').post(addPlant);
router.route('/searchPlant').post(searchPlants)

export default router;