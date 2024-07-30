"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthMiddleware = ((req, res, next) => {
    if (!req.headers.authorization || req.headers.authorization.split(' ')[1] !== "admin") {
        // const a= req.headers.authorization?.split(' ')[0];
        // console.log(a);
        return res.status(403).json({ message: "Unauthorized Access" });
    }
    next();
});
exports.default = AuthMiddleware;
