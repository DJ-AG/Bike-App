"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.login = exports.register = void 0;
const register = (req, res) => {
    res.send('register user');
};
exports.register = register;
const login = (req, res) => {
    res.send('login user');
};
exports.login = login;
const updateUser = (req, res) => {
    res.send('update user');
};
exports.updateUser = updateUser;
