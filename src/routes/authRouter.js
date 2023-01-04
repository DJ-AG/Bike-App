"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const authController_1 = require("../controller/authController");
const apiLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: 'Too many requests from this IP, please try again after 15 minutes',
});
router.route('/register').post(apiLimiter, authController_1.register);
router.route('/login').post(apiLimiter, authController_1.login);
router.route('/updateUser').patch(authController_1.updateUser);
exports.default = router;
