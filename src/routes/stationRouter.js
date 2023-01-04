"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bikeController_1 = require("../controller/bikeController");
const router = express_1.default.Router();
router.route('/stations').post(bikeController_1.showBikeStations);
