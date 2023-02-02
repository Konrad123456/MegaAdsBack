import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import {handleError} from "./utils/errors";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

//Routes
app.get('/', (req, res)  => {
    throw new Error('Dammmmmmmmmm');
})

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on 3001 port');
});