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
Object.defineProperty(exports, "__esModule", { value: true });
exports.showStations = exports.deleteStation = exports.updateStation = exports.getAllStations = exports.createStation = void 0;
const createStation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("create station");
});
exports.createStation = createStation;
const getAllStations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("get all station");
});
exports.getAllStations = getAllStations;
const updateStation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("ubdate station");
});
exports.updateStation = updateStation;
const deleteStation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("delete station");
});
exports.deleteStation = deleteStation;
const showStations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("show stations");
});
exports.showStations = showStations;
