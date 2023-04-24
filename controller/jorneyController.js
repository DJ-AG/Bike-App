"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJorney = exports.getAllJorneys = exports.createJorney = void 0;
const Jorney_1 = __importDefault(require("../models/Jorney"));
const http_status_codes_1 = require("http-status-codes");
const errors_1 = require("../errors");
const createJorney = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Departure, Return, Departure_station_id, Departure_station_name, Return_station_id, Return_station_name, Covered_distance_m, Duration } = req.body;
    //  if (!Departure || !Return || !Departure_station_id || !Departure_station_name || !Return_station_id || !Return_station_name || !Covered_distance_m || !Duration) {
    //    throw new BadRequestError("Please Provide All Values");
    //  }
    const jorney = yield Jorney_1.default.create(req.body);
    res.status(http_status_codes_1.StatusCodes.CREATED).json({ jorney });
});
exports.createJorney = createJorney;
const getAllJorneys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = Jorney_1.default.find(req.jorneys);
    const jorneys = yield result;
    const totalJorneys = yield Jorney_1.default.countDocuments();
    const numOfPages = Math.ceil(totalJorneys / 10);
    res.status(http_status_codes_1.StatusCodes.OK).json({ jorneys, totalJorneys, numOfPages });
});
exports.getAllJorneys = getAllJorneys;
const deleteJorney = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: jorneyId } = req.params;
    const jorney = yield Jorney_1.default.findOne({ _id: jorneyId });
    if (!jorney) {
        throw new errors_1.NotFoundError(`No jorneys with id :${jorneyId}`);
    }
    yield jorney.remove();
    res.status(http_status_codes_1.StatusCodes.OK).json({ msg: "Success! jorney removed" });
});
exports.deleteJorney = deleteJorney;
