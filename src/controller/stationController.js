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
exports.deleteStation = exports.getAllStations = exports.createStation = void 0;
require("express-async-errors");
const http_status_codes_1 = require("http-status-codes");
const errors_1 = require("../errors");
const Station_1 = __importDefault(require("../models/Station"));
const createStation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { Nimi, Namn, Name, Osoite, Adress, Kaupunki, Stad, Operaattor, Kapasiteet, x, y, } = req.body;
    if (!Nimi ||
        !Namn ||
        !Name ||
        !Osoite ||
        !Adress ||
        !Kaupunki ||
        !Stad ||
        !Operaattor ||
        !Kapasiteet ||
        !x ||
        !y) {
        throw new errors_1.BadRequestError("please provide all values");
    }
    const stationAlreadyExists = yield Station_1.default.findOne({
        Nimi,
        Namn,
        Name,
        Osoite,
        Adress,
        Kaupunki,
        Stad,
        Operaattor,
        Kapasiteet,
        x,
        y,
    });
    if (stationAlreadyExists) {
        throw new errors_1.BadRequestError("Station already exists!");
    }
    const station = yield Station_1.default.create({
        Nimi,
        Namn,
        Name,
        Osoite,
        Adress,
        Kaupunki,
        Stad,
        Operaattor,
        Kapasiteet,
        x,
        y,
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({ station });
});
exports.createStation = createStation;
const getAllStations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { status, station, sort, search } = req.query;
    const queryObject = {
        createdBy: req.stations,
    };
    let result = Station_1.default.find(queryObject);
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    result = result.skip(skip).limit(limit);
    const jobs = yield result;
    const totalJobs = yield Station_1.default.countDocuments(queryObject);
    const numOfPages = Math.ceil(totalJobs / limit);
    res.status(http_status_codes_1.StatusCodes.OK).json({ jobs, totalJobs, numOfPages });
});
exports.getAllStations = getAllStations;
const deleteStation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: stationId } = req.params;
    const station = yield Station_1.default.findOne({ _id: stationId });
    if (!station) {
        throw new errors_1.NotFoundError(`No job with id :${stationId}`);
    }
    yield station.remove();
    res.status(http_status_codes_1.StatusCodes.OK).json({ msg: 'Success! Job removed' });
});
exports.deleteStation = deleteStation;
