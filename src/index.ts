import express ,{Request,Response,NextFunction} from 'express';
import middleware from './middleware/test';
import AuthMiddleware from './middleware/Authentication';

import cors from 'cors';
import 'dotenv/config';

const app = express();




app.use(middleware); //apllay in all over  project 
app.use(cors()); // enable cors for all routes
app.use(express.json()); // parse json request body


app.get('/', middleware ,(req:Request, res:Response) => {
    res.send('Hello World!');
});
app.post('/add-user', AuthMiddleware ,(req:Request, res:Response) => {
    res.send('Hello World!');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
