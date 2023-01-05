import express from "express";
const router = express.Router();

import {
  createStation,
  getAllStations,
  updateStation,
  deleteStation,
  showStations,
} from "../controller/stationController";

router.route("/create").post(createStation).get(getAllStations);
router.route("/show").get(showStations);
router.route("/:id").delete(deleteStation).patch(updateStation);
router.route("/getstations").get(getAllStations);


export default router