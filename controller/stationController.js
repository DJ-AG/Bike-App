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
const Station_1 = __importDefault(require("../models/Station"));
const http_status_codes_1 = require("http-status-codes");
const errors_1 = require("../errors");
const createStation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Name, Osoite, Operaattor, Kapasiteet, x, y, Kaupunki } = req.body;
    if (!Name || !Osoite || !Operaattor || !Kapasiteet || !x || !y || !Kaupunki) {
        throw new errors_1.BadRequestError("Please Provide All Values");
    }
    const station = yield Station_1.default.create(req.body);
    res.status(http_status_codes_1.StatusCodes.CREATED).json({ station });
});
exports.createStation = createStation;
const getAllStations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = Station_1.default.find(req.stations);
    const stations = yield result;
    const totalStations = yield Station_1.default.countDocuments();
    const numOfPages = Math.ceil(totalStations / 10);
    res.status(http_status_codes_1.StatusCodes.OK).json({ stations, totalStations, numOfPages });
});
exports.getAllStations = getAllStations;
const deleteStation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: stationId } = req.params;
    const station = yield Station_1.default.findOne({ _id: stationId });
    if (!station) {
        throw new errors_1.NotFoundError(`No station with id :${stationId}`);
    }
    yield station.remove();
    res.status(http_status_codes_1.StatusCodes.OK).json({ msg: "Success! station removed" });
});
exports.deleteStation = deleteStation;
