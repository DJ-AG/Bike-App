"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const stationController_1 = require("../controller/stationController");
router.route("/create").post(stationController_1.createStation).get(stationController_1.getAllStations);
router.route("/show").get(stationController_1.showStations);
router.route("/:id").delete(stationController_1.deleteStation).patch(stationController_1.updateStation);
router.route("/getstations").get(stationController_1.getAllStations);
exports.default = router;
