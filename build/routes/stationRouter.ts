import { Router } from "express";
const router = Router();

import {
  createStation,
  getAllStations,
  deleteStation,
} from "../controller/stationController";

router.route("/create").post(createStation).get(getAllStations);
router.route("/:id").delete(deleteStation);
router.route("/getstations").get(getAllStations);

export default router;
