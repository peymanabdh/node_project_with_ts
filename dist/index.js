"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_1 = __importDefault(require("./middleware/test"));
const Authentication_1 = __importDefault(require("./middleware/Authentication"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(test_1.default); //apllay in all over  project 
app.use((0, cors_1.default)()); // enable cors for all routes
app.use(express_1.default.json()); // parse json request body
app.get('/', test_1.default, (req, res) => {
    res.send('Hello World!');
});
app.post('/add-user', Authentication_1.default, (req, res) => {
    res.send('Hello World!');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
