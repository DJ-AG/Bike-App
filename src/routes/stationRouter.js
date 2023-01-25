"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const stationController_1 = require("../controller/stationController");
router.route("/create").post(stationController_1.createStation).get(stationController_1.getAllStations);
router.route("/:id").delete(stationController_1.deleteStation);
router.route("/getstations").get(stationController_1.getAllStations);
exports.default = router;
