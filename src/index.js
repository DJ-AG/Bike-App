"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const not_found_1 = __importDefault(require("./middleware/not-found"));
const app = (0, express_1.default)();
//middleware
not_found_1.default;
error_handler_1.default;
app.get("/", (req, res) => {
    res.send(`
    <div>
        <h1>Hi there!</h1>
        </div>`);
});
app.use(not_found_1.default);
app.use(error_handler_1.default);
const PORT = 5000;
app.listen(PORT, () => {
    console.log("server running on 5000");
});
