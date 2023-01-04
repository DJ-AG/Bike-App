"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ msg: 'there was an error' });
};
exports.default = errorHandlerMiddleware;
