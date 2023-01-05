"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const UserSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: [true, "Please provide name"],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        validate: validator_1.default.isEmail, message: 'Please provide valid email',
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
        minlength: 3,
    },
    // implementation for future
    //   location: {
    //     maxlength: 20,
    //     trim: true,
    //   },
});
exports.default = mongoose_1.default.model('User', UserSchema);
