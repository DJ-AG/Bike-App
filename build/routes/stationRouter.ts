import express from 'express'
import {createBikeStation,showBikeStations,deleteBikeStation} from "../controller/bikeController";

const router = express.Router()

router.route('/stations').post(showBikeStations)