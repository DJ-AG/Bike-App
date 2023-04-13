import { Router } from "express";
const router = Router();

import {
  createJorney,
  getAllJorneys,
  deleteJorney,
} from "../controller/jorneyController";

router.route("/create").post(createJorney);
router.route("/:id").delete(deleteJorney);
router.route("/getjorneys").get(getAllJorneys);

export default router;
