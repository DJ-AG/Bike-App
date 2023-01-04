"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBikeStation = exports.deleteBikeStation = exports.showBikeStations = exports.createBikeStation = void 0;
const createBikeStation = (req, res) => {
    res.send("createStation");
};
exports.createBikeStation = createBikeStation;
const showBikeStations = (req, res) => {
    res.send("showStations");
};
exports.showBikeStations = showBikeStations;
const deleteBikeStation = (req, res) => {
    res.send("deleteStation");
};
exports.deleteBikeStation = deleteBikeStation;
const updateBikeStation = (req, res) => {
    res.send("ubdateStation");
};
exports.updateBikeStation = updateBikeStation;
