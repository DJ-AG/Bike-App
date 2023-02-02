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
exports.logout = exports.updateUser = exports.login = exports.register = void 0;
require("express-async-errors");
const http_status_codes_1 = require("http-status-codes");
const index_1 = require("../errors/index");
const attachCookie_1 = __importDefault(require("../utils/attachCookie"));
const User_1 = __importDefault(require("../models/User"));
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        throw new index_1.BadRequestError("please provide all values");
    }
    const userAlreadyExists = yield User_1.default.findOne({ email });
    if (userAlreadyExists) {
        throw new index_1.BadRequestError("Email already in use");
    }
    const user = yield User_1.default.create({ name, email, password });
    const token = user.createJWT();
    res.status(http_status_codes_1.StatusCodes.OK).json({ user, token });
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new index_1.BadRequestError("Please provide all values");
    }
    const user = yield User_1.default.findOne({ email }).select("+password");
    if (!user) {
        throw new index_1.UnAuthenticatedError("Invalid Credentials");
    }
    const isPasswordCorrect = yield user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new index_1.UnAuthenticatedError("Invalid Credentials");
    }
    const token = user.createJWT();
    (0, attachCookie_1.default)(res, token);
    user.password = undefined;
    res.status(http_status_codes_1.StatusCodes.OK).json({ user });
});
exports.login = login;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("updateUser");
});
exports.updateUser = updateUser;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.cookie("token", "logout", {
        httpOnly: true,
        expires: new Date(Date.now() + 1000),
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({ msg: "user logged out!" });
});
exports.logout = logout;
