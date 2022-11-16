import { connectDB } from './database.js';
import {PORT} from './config.js'
import app from './app.js'

import cors from 'cors'

const whiteList = ["http://localhost:3000/","http://crersolucionestecno.ar/"]

app.use(cors({
  origin:[whiteList]
}));


connectDB();
app.listen(PORT);
console.log('Server is running on Port: ',PORT);