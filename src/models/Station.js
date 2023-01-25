"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const StationSchema = new mongoose_1.default.Schema({
    Nimi: {
        type: String,
        required: [true, "Anna nimi"],
        trim: true,
    },
    Namn: {
        type: String,
        required: [true, "Ange namn"],
        trim: true,
    },
    Name: {
        type: String,
        required: [true, "Please provide name"],
        trim: true,
    },
    Osoite: {
        type: String,
        required: [true, "Anna Osoite / Please provide address"],
    },
    Adress: {
        type: String,
        required: [true, "Please provide adress"],
    },
    Kaupunki: {
        type: String,
        required: [true, "Anna kaupunki / Please provide City"],
    },
    Stad: {
        type: String,
        required: [true, "Please provide email"],
    },
    Operaattor: {
        type: String,
        required: [true, "Please provide email"],
    },
    Kapasiteet: {
        type: String,
        required: [true, "Please provide email"],
    },
    x: {
        type: String,
        required: [true, "Please provide email"],
    },
    y: {
        type: String,
        required: [true, "Please provide email"],
    },
});
exports.default = mongoose_1.default.model("Station", StationSchema);
