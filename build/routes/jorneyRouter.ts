import { Router } from "express";
const router = Router();

import {
  getAllJorneys,
} from "../controller/jorneyController";

router.route("/getjorneys").get(getAllJorneys);

export default router;
