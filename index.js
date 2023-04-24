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
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
mongoose_1.default.set("strictQuery", false);
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const morgan_1 = __importDefault(require("morgan"));
//db and authenticateUser
const connect_1 = __importDefault(require("./DB/connect"));
// routers
const stationRouter_1 = __importDefault(require("./routes/stationRouter"));
const jorneyRouter_1 = __importDefault(require("./routes/jorneyRouter"));
//middleware
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const not_found_1 = __importDefault(require("./middleware/not-found"));
if ((process.env.NODE_ENV || "").trim() !== "production") {
    app.use((0, morgan_1.default)("dev"));
}
app.use(express_1.default.static(path_1.default.resolve(__dirname, "./client/build")));
app.use(express_1.default.json());
app.use("/api/v1/jorney", jorneyRouter_1.default);
app.use("/api/v1/station", stationRouter_1.default);
app.use((req, res, next) => {
    next();
});
app.get("*", (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, "./client/build", "index.html"));
});
app.use(not_found_1.default);
app.use(error_handler_1.default);
const port = process.env.PORT || 5000;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.default)(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    }
    catch (error) {
        console.log(error);
    }
});
start();
