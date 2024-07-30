import express ,{Request,Response,NextFunction} from 'express';

const middleware =((req: express.Request, res: express.Response,next:NextFunction)=>{
    console.log(`Method: ${req.method}, URL: ${req.url}`);
    next();
});


export default middleware;