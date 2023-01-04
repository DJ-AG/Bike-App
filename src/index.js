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
const express_1 = __importDefault(require("express"));
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const not_found_1 = __importDefault(require("./middleware/not-found"));
const dotenv_1 = __importDefault(require("dotenv"));
const connect_1 = __importDefault(require("./DB/connect"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
//middleware
app.get("/", (req, res) => {
    res.send(`
    <div>
        <h1>Hi there!</h1>
        </div>`);
});
app.use(not_found_1.default);
app.use(error_handler_1.default);
app.listen(5000, () => {
    console.log("server running on 5000");
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.default)(process.env.MONGO_URL);
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on port ${process.env.PORT}...`);
        });
    }
    catch (error) {
        console.log(error);
    }
});
