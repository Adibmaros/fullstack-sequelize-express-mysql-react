import express from 'express';
import cors from 'cors';
import userRoot from './root/userRoot.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRoot);

app.listen(5000, () =>{
    console.log('listening on port 5000')
})