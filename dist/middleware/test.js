"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middleware = ((req, res, next) => {
    console.log(`Method: ${req.method}, URL: ${req.url}`);
    next();
});
exports.default = middleware;
