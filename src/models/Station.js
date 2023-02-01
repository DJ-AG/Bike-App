"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const StationSchema = new mongoose_1.default.Schema({
    Name: {
        type: String,
        required: [true, "Please provide Nimi"],
    },
    Adress: {
        type: String,
        required: [true, "Please provide Adress"],
    },
    Operaattor: {
        type: String,
        enum: ["CityBike Finland", "test"],
        required: [true, "Please provide Operaattor"],
    },
    City: {
        type: String,
        enum: ["Helsinki", "Espoo"]
    },
    Kapasiteet: {
        type: String,
        required: [true, "Please provide Kapasiteet"],
    },
    x: {
        type: String,
        required: [true, "Please provide x"],
    },
    y: {
        type: String,
        required: [true, "Please provide y"],
    },
});
exports.default = mongoose_1.default.model("Station", StationSchema);
