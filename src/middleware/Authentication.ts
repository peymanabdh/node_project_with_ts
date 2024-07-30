import express ,{Request,Response,NextFunction} from 'express';

const AuthMiddleware =((req: express.Request, res: express.Response,next:NextFunction)=>{
    if(!req.headers.authorization || req.headers.authorization.split(' ')[1]!=="admin"){
        // const a= req.headers.authorization?.split(' ')[0];
        // console.log(a);
        return res.status(401).json({message: "Unauthorized Access"});
    }
    next();
});


export default AuthMiddleware;