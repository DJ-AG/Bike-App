"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const jorneyController_1 = require("../controller/jorneyController");
router.route("/create").post(jorneyController_1.createJorney);
router.route("/:id").delete(jorneyController_1.deleteJorney);
router.route("/getjorneys").get(jorneyController_1.getAllJorneys);
exports.default = router;
