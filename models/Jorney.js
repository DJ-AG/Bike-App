"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const JorneySchema = new mongoose_1.default.Schema({
    Departure: {
        type: String,
    },
    Return: {
        type: String,
    },
    Departure_station_id: {
        type: String,
    },
    Departure_station_name: {
        type: String,
    },
    Return_station_id: {
        type: String,
    },
    Return_station_name: {
        type: String,
    },
    Covered_distance_m: {
        type: String,
    },
    Duration: {
        type: String,
    },
});
exports.default = mongoose_1.default.model("Jorney", JorneySchema);
