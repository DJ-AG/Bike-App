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
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    Namn: {
        type: String,
        required: [true, "Ange namn"],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    Name: {
        type: String,
        required: [true, "Please provide name"],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    Osoite: {
        type: String,
        required: [true, "Anna Osoite / Please provide address"],
        unique: true,
    },
    Adress: {
        type: String,
        required: [true, "Please provide adress"],
        unique: true,
    },
    Kaupunki: {
        type: String,
        required: [true, "Anna kaupunki / Please provide City"],
        unique: true,
    },
    Stad: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
    },
    Operaattor: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
    },
    Kapasiteet: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
    },
    x: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
    },
    y: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
    },
});
exports.default = mongoose_1.default.model("User", StationSchema);
